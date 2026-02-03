"use client";

import { useRef, useState } from "react";
import { foods, Food } from "./data/foods";

function randomFromList<T>(list: T[]): T | null {
  if (list.length === 0) return null;
  return list[Math.floor(Math.random() * list.length)];
}

export default function Home() {
  const [main, setMain] = useState<Food | null>(null);
  const [side, setSide] = useState<Food | null>(null);
  const [drink, setDrink] = useState<Food | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const mainFoods = foods.filter((f) => f.category === "main");
  const sideFoods = foods.filter((f) => f.category === "side");
  const drinkFoods = foods.filter((f) => f.category === "drink");

  const scrollToResult = () =>
    setTimeout(
      () => cardRef.current?.scrollIntoView({ behavior: "smooth" }),
      50,
    );

  const randomMain = () => {
    setMain(randomFromList(mainFoods));
    scrollToResult();
  };

  const randomSide = () => {
    setSide(randomFromList(sideFoods));
    scrollToResult();
  };

  const randomDrink = () => {
    setDrink(randomFromList(drinkFoods));
    scrollToResult();
  };

  const randomCombo = () => {
    setMain(randomFromList(mainFoods));
    setSide(randomFromList(sideFoods));
    setDrink(randomFromList(drinkFoods));
    scrollToResult();
  };

  const renderCard = (food: Food | null, label: string) => (
    <div className="bg-white rounded-xl shadow p-4 min-h-[260px]">
      <h3 className="font-semibold mb-2">{label}</h3>

      {!food && (
        <div className="h-40 flex items-center justify-center text-gray-400 text-sm">
          Chưa chọn
        </div>
      )}

      {food && (
        <>
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-32 object-cover rounded-lg"
          />

          <p className="mt-2 font-medium">{food.name}</p>

          <div className="flex flex-wrap gap-1 mt-1">
            {(food.mood ?? []).map((m) => (
              <span
                key={m}
                className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full"
              >
                #{m}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 pb-24">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          🍽️ Hôm nay ăn gì?
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Random theo từng loại hoặc chọn combo hoàn hảo
        </p>

        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        >
          {(main || (!side && !drink)) && renderCard(main, "🍛 Món chính")}
          {side && renderCard(side, "🍢 Món phụ")}
          {drink && renderCard(drink, "🥤 Nước uống")}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t sm:static sm:border-0">
        <div className="max-w-5xl mx-auto p-3 flex gap-2 justify-center">
          <button
            onClick={randomMain}
            className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-orange-500 text-white font-semibold"
          >
            🍛 Chính
          </button>

          <button
            onClick={randomSide}
            className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-orange-500 text-white font-semibold"
          >
            🍢 Phụ
          </button>

          <button
            onClick={randomDrink}
            className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-orange-500 text-white font-semibold"
          >
            🥤 Nước
          </button>

          <button
            onClick={randomCombo}
            className="px-5 py-2 rounded-full bg-rose-500 text-white font-bold"
          >
            🎯 Combo
          </button>
        </div>
      </div>
    </main>
  );
}
