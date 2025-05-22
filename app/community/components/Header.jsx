// app/community/components/Header.jsx
"use client";

import { BotMessageSquare } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-left mb-6">
        <h1 className="sm:text-2xl text-lg font-bold border-b-2 border-primary">
          Community Forum
        </h1>
      </div>
      <div className="flex items-center justify-center mb-2">
        <BotMessageSquare className="bg-gradient-to-r from-purple-500 to-purple-950 text-transparent rounded-full p-2 text-white w-14 h-14" />
      </div>
      <div className="flex flex-col justify-items-center justify-center mb-5">
        <p className="leading-snug text-center sm:text-3xl text-2xl mb-2 font-normal">
          Welcome to the{' '}
          <span className="bg-gradient-to-r from-purple-500 to-purple-950 text-transparent bg-clip-text">
            Doctor Kays Community
          </span>{' '}
          Central Help Forum
        </p>
      </div>
    </>
  );
}