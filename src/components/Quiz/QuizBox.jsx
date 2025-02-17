import React, { useState } from "react";
import Mcq from "./Mcq";
import { quizzes } from "../../assets/data";

const QuizBox = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const question = quizzes[questionNum];
  console.log(question);

  return (
    <div className="text-[#000] bg-[#fff] rounded-[50px]">
      <div className=" mx-auto min-h-[550px]  px-4 py-8">
        <div className="grid grid-cols-3 justify-between px-6 w-full border-b-2 border-gray-300 pb-6 ">
          <div className="text-start">{`Question no : ${questionNum + 1}/${
            quizzes.length
          }`}</div>
          <div className="text-center">Time left : 23s</div>
          <div className="text-end">Score : {score}/100</div>
        </div>

        <div className="mt-8 px-4">
          <Mcq
            question={question}
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            score={score}
            setScore={setScore}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
