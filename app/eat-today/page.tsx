"use client";
export const dynamic = "force-dynamic";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function EatTodayApp() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content router={router} />
    </Suspense>
  );
}

function Content({ router }: { router: ReturnType<typeof useRouter> }) {
  const searchParams = useSearchParams();
  const meal = searchParams.get("meal");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 flex flex-col items-center justify-center text-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-sm">
        <h1 className="text-2xl font-bold text-pink-600">
          Enjoy your meal!
          <br /> 🍔 {meal}
        </h1>
        <button
          className="mt-6 bg-[#fec1bf] text-white px-4 py-2 rounded-lg"
          onClick={() => router.push("/")}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
