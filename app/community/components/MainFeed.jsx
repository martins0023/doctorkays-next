// app/community/components/MainFeed.jsx
"use client";

import Link from "next/link";
import { useCommunity } from "../communityContext";
import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle } from "lucide-react";

export default function MainFeed() {
  const { questions, likedIds, setLikedIds } = useCommunity();

  if (!questions.length) return <p>No questions found.</p>;

  return (
    <main className="md:w-2/4 w-full">
      {questions.map((q) => (
        <div
          key={q._id}
          className="border-b p-4 mb-4 cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{q.user}</h2>
            <span className="text-sm text-gray-400">
              {new Date(q.date).toLocaleDateString("en-CA")}
            </span>
          </div>
          <p className="font-semibold mt-1">{q.title}</p>
          <p className="mt-2 line-clamp-2">{q.question}</p>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-700">
            <motion.div
              onClick={() => handleLike(q._id)}
              className={`flex items-center px-3 py-1 rounded-full gap-1 cursor-pointer transition-colors ${
                likedIds.includes(q._id)
                  ? "bg-green-100 text-green-950 pointer-events-none"
                  : "bg-gray-100 text-gray-700 hover:bg-green-200"
              }`}
              whileHover={{ scale: likedIds.includes(q._id) ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="hidden sm:inline">Likes: {q.likes}</span>
              <span className="inline sm:hidden">{q.likes}</span>
            </motion.div>
            <Link href={`/community/${q._id}`}>
              <motion.div
                className="flex items-center bg-gray-100 px-3 py-1 rounded-full gap-1 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                // animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">
                  Comments: {q.comments.length}
                </span>
                <span className="inline sm:hidden">{q.comments.length}</span>
              </motion.div>
            </Link>

            {/* Doctor Replied Status (static) */}
            {q.hasDoctorReplied ? (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-xl text-xs sm:text-sm">
                Doctor Kays has replied
              </span>
            ) : (
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-xl text-xs sm:text-sm">
                Doctor Kays hasn't replied
              </span>
            )}
          </div>
          {q.hasDoctorReplied && q.answer && (
            <div
              className="pl-4 border-l-4 mt-2 border-green-600 rounded-md p-1"
              onClick={() => goToQuestionDetail(q)}
            >
              <p className="mt-1 text-sm ">{q.answer}</p>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
