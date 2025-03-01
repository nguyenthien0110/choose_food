"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

function ItemComponent({
  title,
  fileName,
  handleOnclick,
}: {
  title: string;
  fileName: string;
  handleOnclick: () => void;
}) {
  const color = ["bg-[#fec1bf]", "bg-[#bdd3cd]"];
  const [bgColor, setBgColor] = useState("");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  console.log(basePath);

  useEffect(() => {
    setBgColor(color[Math.floor(Math.random() * color.length)]);
  }, []);

  return (
    <>
      <div
        onClick={handleOnclick}
        className={clsx(
          bgColor,
          "h-16 w-16 rounded-3xl self-center ml-1 shadow-xl shadow-cyan-950/50"
        )}
      >
        <div className="overflow-hidden flex justify-center items-center">
          <Image
            className="mix-blend-multiply object-contain"
            src={`${basePath}/${fileName}`}
            alt="French Fries"
            width={64}
            height={64}
            priority
          />
        </div>
        <span className="text-center text-[12px] font-light flex items-center justify-center">
          {title}
        </span>
      </div>
    </>
  );
}

export default ItemComponent;
