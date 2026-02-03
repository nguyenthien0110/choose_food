"use client";

import { useState } from "react";
import { foods, Food } from "./data/foods";

function getRandomIndex(length: number, exclude?: number) {
  if (length === 0) return -1;
  if (exclude === undefined) {
    return Math.floor(Math.random() * length);
  }

  let index = exclude;
  while (index === exclude) {
    index = Math.floor(Math.random() * length);
  }
  return index;
}

export default function Home() {
  const [food, setFood] = useState<Food | null>(null);
  const [shaking, setShaking] = useState(false);

  const randomFood = () => {
    setShaking(true);

    setTimeout(() => {
      const currentIndex = food
        ? foods.findIndex((f) => f.id === food.id)
        : undefined;

      const newIndex = getRandomIndex(foods.length, currentIndex);

      if (newIndex >= 0) {
        setFood(foods[newIndex]);
      }

      setShaking(false);
    }, 400);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          🍽️ Hôm nay ăn gì?
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Khi bạn không muốn suy nghĩ
        </p>

        <div
          className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 transition-all
          ${shaking ? "animate-wiggle" : ""}`}
        >
          {!food && (
            <div className="h-56 flex flex-col items-center justify-center text-gray-400">
              <span className="text-5xl mb-4">🤔</span>
              <p>Nhấn nút bên dưới để chọn món</p>
            </div>
          )}

          {food && (
            <>
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-44 sm:h-56 object-cover rounded-xl"
              />

              <h2 className="text-xl sm:text-2xl font-semibold mt-4">
                {food.name}
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {food.mood.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700"
                  >
                    #{m}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={randomFood}
          className="mt-6 w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg transition"
        >
          🎲 Random món ăn
        </button>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
          100% {
            transform: rotate(-2deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 0.25s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
