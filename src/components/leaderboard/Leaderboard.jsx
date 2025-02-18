import React, { useEffect, useState } from "react";
import { getScores } from "../../utils/db";

const Leaderboard = ({ attempt }) => {
  const [scores, setScores] = useState([]);

  // Fetch scores from IndexedDB
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scores = await getScores("QuizDB", "scores");
        setScores(scores);
      } catch (error) {
        console.error("Failed to fetch scores:", error);
      }
    };
    fetchScores();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="rounded-2xl text-[#000] w-full px-6 py-4 overflow-y-scroll md:min-h-[300px] max-h-[300px] bg-[#fff]">
      <div className="flex justify-center gap-4 items-center">
        <h2 className="text-2xl font-bold text-center mb-8">Score History</h2>
        <button
          onClick={handleRefresh}
          className="mb-8 hover:text-2xl cursor-pointer"
        >
          ⟳
        </button>
      </div>

      {/* Scores List */}
      <ul>
        {scores.map((score, index) => (
          <li key={index} className="mb-2">
            {`${index + 1} - `} {`Score : ${score.score} / ${score.totalScore}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
