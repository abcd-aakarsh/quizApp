import React from "react";

const Mcq = ({ question, questionNum, setQuestionNum, score, setScore }) => {
  const checkAnswer = (e, optionName) => {
    if (optionName === question.correct_answer) {
    }
  };
  const nextQuestion = () => {
    if (questionNum <= 9) {
      setQuestionNum(questionNum + 1);
    }
  };
  return (
    <>
      <div>
        <div>
          <h2 className="text-3xl font-medium mb-8">{`${question.question}`}</h2>
          <ul className="flex flex-col gap-2 mb-4">
            {question.options.map((opt) => {
              const [OptionName, OptionValue] = opt.split(" ");
              return (
                <li
                  key={OptionName}
                  className="px-4 py-4 border-2 border-gray-400 rounded-xl hover:border-gray-800 text-gray-500 hover:text-gray-800"
                >{`${OptionName} ${OptionValue}`}</li>
              );
            })}
          </ul>
        </div>
        <div className="px-8 py-2 w-fit mx-auto rounded-full border text-center bg-amber-500 hover:bg-amber-600 text-white">
          <button onClick={nextQuestion}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Mcq;
