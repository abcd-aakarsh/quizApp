import React from "react";
import Header from "./components/common/Header";
import QuizBox from "./components/Quiz/QuizBox";
import Leaderboard from "./components/leaderboard/Leaderboard";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 h-screen text-white ">
      <Header />
      <div className="grid-cols-5 grid max-w-[1220px] mx-auto  px-6 py-6 gap-8 ">
        <div className="col-span-3 ">
          <QuizBox />
        </div>
        <div className="col-span-2 rounded-[50px]">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default App;
