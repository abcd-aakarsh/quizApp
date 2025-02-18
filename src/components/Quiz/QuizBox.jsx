import React, { useEffect, useState } from "react";
import Mcq from "./Mcq";
import { quizzes } from "../../assets/data";
import Integers from "./Integers";
import Thankyou from "../common/Thankyou";

const QuizBox = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [timer, setTimer] = useState(30);
  const question = quizzes[questionNum];

  useEffect(() => {
    setTimer(30);

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          handleNextQuestion();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [questionNum]);

  const handleNextQuestion = () => {
    if (questionNum < quizzes.length - 1) {
      setQuestionNum((prevQuestionNum) => prevQuestionNum + 1);
    }
  };

  return (
    <div className="text-[#000] bg-[#fff] rounded-[50px]">
      <div className=" mx-auto min-h-[575px]  px-4 py-8">
        {questionNum <= 9 && (
          <div className="grid grid-cols-3 justify-between px-6 w-full border-b-2 border-gray-300 pb-6 ">
            <div className="text-start text-amber-800">{`Question no : ${
              questionNum + 1
            }/${quizzes.length}`}</div>
            <div className="text-center text-red-600">Time left : {timer}</div>
            <div className="text-end text-green-500">Score : {score}/10</div>
          </div>
        )}

        <div className="mt-8 px-4">
          {questionNum <= 9 ? (
            question.type === "multiple_choice" ? (
              <Mcq
                question={question}
                questionNum={questionNum}
                setQuestionNum={setQuestionNum}
                score={score}
                setScore={setScore}
              />
            ) : (
              <Integers
                question={question}
                questionNum={questionNum}
                setQuestionNum={setQuestionNum}
                score={score}
                setScore={setScore}
              />
            )
          ) : (
            <Thankyou
              score={score}
              totalScore={quizzes.length}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
              setScore={setScore}
              attempt={attempt}
              setAttempt={setAttempt}
            />
          )}
          {/* <Mcq
            
          /> */}
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
