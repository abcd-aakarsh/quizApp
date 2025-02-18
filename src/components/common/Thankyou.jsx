import React from "react";
import { addScore } from "../../utils/db"; // Import the utility

const Thankyou = ({
  score,
  totalScore,
  setQuestionNum,
  setScore,
  attempt,
  setAttempt,
}) => {
  const reset = () => {
    setQuestionNum(0);
    setScore(0);
  };

  const handleSubmitScore = async () => {
    try {
      await addScore("QuizDB", "scores", { score, totalScore, attempt });

      alert("Score submitted successfully!");
    } catch (error) {
      console.error("Failed to submit score:", error);
    }
  };

  return (
    <div className="flex flex-col text-center justify-center gap-8 items-center h-[350px]">
      <h3 className="text-3xl text-gray-600">
        😀 Thank You for playing this quiz 😀
      </h3>
      <h4 className="text-2xl text-gray-600">
        {`You scored ${score} out of ${totalScore}.  `}{" "}
      </h4>
      <div className="flex gap-6">
        <button
          className="px-4 cursor-pointer py-2 rounded-full bg-amber-500 text-[#fff] font-semibold hover:bg-amber-600"
          onClick={handleSubmitScore}
        >
          Submit Score
        </button>
        <button
          className="px-8 cursor-pointer py-2 rounded-full bg-blue-500 text-[#fff] font-semibold hover:bg-blue-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Thankyou;
