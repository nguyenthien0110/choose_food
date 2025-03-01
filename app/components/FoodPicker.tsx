"use client";

import { useRouter } from "next/navigation";
import { Heart } from "./icon/Heart";
import { SearchEyeLine } from "./icon/SearchEyeLine";
import { item } from "./Item";
import ItemComponent from "./ItemComponent";
import axios from "axios";
import { useState } from "react";

export default function FoodPicker() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChooseFood = async (items: any) => {
    const text = "Bé có chắc muốn chọn món này hông ❤️";
    if (confirm(text)) {
      if (items) {
        setLoading(true);
        await sendTelegram(items.title);
        router.push(`/eat-today?meal=${items.title}`);
        setLoading(false);
      }
    }
  };

  const sendTelegram = async (message: string) => {
    const TOKEN = "7908979390:AAEfS-OBoUaEdwJ8Y5NxSeyZheFBYjIXyTM";
    const CHAT_ID = "-4502843341";
    const mess = `Bé iu chọn: ${message}`;
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: mess,
    });
  };
  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 border-4 border-t-[#fec1bf] border-opacity-50 rounded-full animate-spin"></div>
        </div>
      )}
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
      <div className="grid grid-cols-4 gap-4 p-3 w-full mt-4 justify-center items-center">
        {item.map((item, index) => {
          return (
            <ItemComponent
              handleOnclick={() => handleChooseFood(item)}
              title={item.title}
              key={index}
              fileName={item.fileName}
            />
          );
        })}
      </div>
    </>
  );
}
