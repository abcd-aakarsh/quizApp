import React, { useState } from "react";

const Mcq = ({ question, questionNum, setQuestionNum, score, setScore }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const checkAnswer = (optionName) => {
    if (!answered) {
      setSelectedAnswer(optionName);
      if (optionName[0] === question.correct_answer) {
        setScore(score + 1); // Increment score for correct answer
      }
      setAnswered(true); // Mark the question as answered
    }
  };

  const nextQuestion = () => {
    if (questionNum <= 9) {
      setQuestionNum(questionNum + 1); // Move to the next question
      setAnswered(false); // Reset answered state
      setSelectedAnswer(null); // Reset selected answer
    }
  };

  return (
    <>
      <div>
        <div className="min-h-[400px]">
          <h2 className="text-3xl font-medium mb-8">{`${question.question}`}</h2>
          <ul className="flex flex-col gap-2 mb-4">
            {question.options.map((opt) => {
              const [OptionName, OptionValue] = opt.split(" ");
              const isCorrect = OptionName[0] === question.correct_answer;
              const isSelected = OptionName === selectedAnswer;

              // Determine styles based on correctness and selection
              let borderColor = "border-gray-400"; // Default border color
              let bgColor = "bg-white"; // Default background color

              if (answered) {
                if (isCorrect) {
                  borderColor = "border-green-700"; // Green border for correct answer
                  bgColor = "bg-green-300"; // Green background for correct answer
                } else if (isSelected) {
                  borderColor = "border-red-700"; // Red border for incorrect selected answer
                  bgColor = "bg-red-300"; // Red background for incorrect selected answer
                }
              }

              return (
                <li
                  key={OptionName}
                  onClick={() => checkAnswer(OptionName)}
                  className={`px-4 py-4 border-2 ${borderColor} ${bgColor} rounded-xl hover:border-gray-800 text-gray-500 md:pl-4 hover:text-gray-800 cursor-pointer`}
                >{`${OptionName}   ${" "} ${OptionValue}`}</li>
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
