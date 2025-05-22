// app/community/components/Actions.jsx
"use client";

import { useCommunity } from "../communityContext";
import { MessageCircleQuestion } from "lucide-react";

export default function Actions() {
  const { setIsModalOpen } = useCommunity();

  return (
    <div className="flex items-center justify-center mb-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex justify-center items-center gap-1 bg-gradient-to-l from-purple-500 to-purple-950 text-white py-3 px-4 rounded hover:opacity-90 transition"
      >
        Ask a Question
        <MessageCircleQuestion />
      </button>
    </div>
  );
}