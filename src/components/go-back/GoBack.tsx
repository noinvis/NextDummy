"use client";
import { useRouter } from "next/navigation";
import { memo } from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button className="bg-[dodgerblue] text-white p-[10px] rounded-xl cursor-pointer border border-[dodgerblue] hover:bg-white duration-300 hover:text-blue-500" onClick={() => router.back()}>Go back</button>
  );
};

export default memo(GoBack);
