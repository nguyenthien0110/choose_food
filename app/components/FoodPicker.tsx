"use client";

import { Heart } from "./icon/Heart";
import { SearchEyeLine } from "./icon/SearchEyeLine";

export default function FoodPicker() {
  return (
    <>
      <div className="w-full h-12 bg-[#fec1bf] rounded-3xl flex items-center shadow-xl shadow-cyan-950/50">
        <div className="w-[20%] h-full flex items-center pl-4 text-2xl">
          <Heart />
        </div>
        <div className="bg-[#fff] w-[60%] h-8 rounded-2xl">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-[20%] flex items-center justify-center">
              <SearchEyeLine />
            </div>
            <span className="text-[#ff9a68] w-[80%] text-[12px] font-bold">
              What should we eat today?
            </span>
          </div>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center gap-2">
          <div className="pt-2">
            <div className="w-3 h-3 rounded-full border-1 border-pink-400 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-pink-400"></div>
            </div>
          </div>

          <div className="w-4 h-4 rounded-full border-1 border-pink-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white border-4 border-pink-400 clip-path-circle"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center"></div>
    </>
  );
}
