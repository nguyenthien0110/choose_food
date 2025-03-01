"use client";

import { useRouter } from "next/navigation";
import { Heart } from "./icon/Heart";
import { SearchEyeLine } from "./icon/SearchEyeLine";
import { item } from "./Item";
import ItemComponent from "./ItemComponent";

export default function FoodPicker() {
  const router = useRouter();
  const handleChooseFood = async (items: unknown) => {
    const text = "Bé có chắc muốn chọn món này hông ❤️";
    if (confirm(text) == true) {
      console.log(items);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "nguyenthien11082005@gmail.com",
          subject: "Test Email",
          message: "Hello, this is a test email!",
        }),
      });

      if (res.ok) {
        alert("Email sent!");
        router.push("/end ");
      } else {
        alert("Failed to send email");
      }
    }
  };
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
