'use client';

import { useCallback } from "react";
import { Button } from "@repo/ui/button";
import { Header } from "@repo/ui/header";
import { useImageStore } from "./store";

const NAME = '김민주';

export default function Page() {
  const setImageInfo = useImageStore((state: any) => state.setImageInfo);

  const handleClick = useCallback(() => {
    fetch('https://picsum.photos/id/0/info')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImageInfo(data);
      });
  }, [setImageInfo]);

  return (
    <div className="min-h-screen flex flex-col justify-between max-w-[375px] mx-auto">
      {/* Header Section */}
      <header className="w-full px-5 pt-[17px] pb-[17px]">
        <Header className="text-[15px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#1A1A1A] font-pretendard">
          {NAME}
        </Header>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center px-2">
        <div className="w-full text-center">
          <div className="text-[28px] font-semibold leading-[1.4em] tracking-[-0.02em] text-[#111] font-pretendard whitespace-pre-line">
            {`안녕하세요\n${NAME}입니다.`}
          </div>
        </div>
      </main>

      {/* Button Section */}
      <div className="w-full flex flex-col items-center justify-center gap-2 px-5 pb-10">
        <Button className="w-[335px]" onClick={handleClick}>다음</Button>
      </div>
    </div>
  );
}
