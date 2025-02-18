import React, { useState } from "react";

const Integers = ({
  question,
  questionNum,
  setQuestionNum,
  score,
  setScore,
}) => {
  const [answer, setAnswer] = useState("");
  const [answered, setAnswered] = useState({
    answered: false,
    status: null, // "correct", "wrong", or null
  });

  const nextQuestion = () => {
    if (questionNum <= 9) {
      setQuestionNum(questionNum + 1);
      setAnswer("");
      setAnswered({ answered: false, status: null });
    }
  };

  const checkAnswer = (answer) => {
    const isCorrect = answer == question.correct_answer;

    setAnswered({ answered: true, status: isCorrect ? "correct" : "wrong" });

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <div className="min-h-[400px]">
        <h2 className="text-3xl font-medium mb-8">{question.question}</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border border-gray-400 w-full py-2 rounded-xl px-3"
          />
          <button
            className={`px-5 py-2 border-gray-400 text-white bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-xl ${
              answered.answered ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => checkAnswer(answer)}
            disabled={answered.answered}
          >
            Submit
          </button>
        </div>
        {answered.answered && (
          <div>
            {answered.status === "correct" ? (
              <div className="text-green-700 text-xl">
                You got the right answer! 😀
              </div>
            ) : (
              <div className="text-red-700 text-xl">
                {`Your answer is wrong. 😱`} <br />{" "}
                {`Correct answer is ${question.correct_answer}`}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button
          className="px-8 py-2 w-fit mx-auto rounded-full cursor-pointer border text-center bg-amber-500 hover:bg-amber-600 text-white"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Integers;
