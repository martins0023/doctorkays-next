"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThumbsUp, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import FooterFull from "../../../components/FooterFull";

export default function QuestionDetailClient({ initialQuestion }) {
  const router = useRouter();
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  const [q, setQ] = useState(initialQuestion);
  const [likedIds, setLikedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("likedQuestions") || "[]");
    } catch {
      return [];
    }
  });
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(initialQuestion.comments || []);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  // Like handler
  const handleLike = async () => {
    if (likedIds.includes(q._id)) return;
    // optimistic UI
    setLikedIds((ids) => [...ids, q._id]);
    setQ((prev) => ({ ...prev, likes: prev.likes + 1 }));
    try {
      const res = await fetch(`${API_BASE}/api/questions/${q._id}/reactions`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "like" }),
      });
      const updated = await res.json();
      setQ(updated);
    } catch (err) {
      console.error("Like failed:", err);
      // rollback
      setQ((prev) => ({ ...prev, likes: prev.likes - 1 }));
      setLikedIds((ids) => ids.filter((id) => id !== q._id));
    }
  };

  // Comment submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/questions/${q._id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: "Anonymous",
          content: commentText.trim(),
          date: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      setComments(data.comments);
      setCommentText("");
    } catch (err) {
      console.error("Comment failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Share handler
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: q.title,
          text: q.question,
          url,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto md:pt-20 sm:pt-10 pt-1">
      <LeftSidebar />
      <div className="max-w-3xl mx-auto py-10 px-6">
        {/* Header & back link */}
        <button onClick={() => router.back()} className="text-blue-600 mb-4">
          ← Back to Forum
        </button>

        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">{q.title}</h1>
          <p className="text-gray-700 mb-4">{q.question}</p>
          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
            <span>Asked by {q.user}</span>
            <span>{new Date(q.date).toLocaleDateString("en-CA")}</span>
          </div>

          {/* Reactions */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              onClick={handleLike}
              className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition ${
                likedIds.includes(q._id)
                  ? "bg-green-100 text-green-800 pointer-events-none"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: likedIds.includes(q._id) ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{q.likes}</span>
            </motion.div>

            <div
              onClick={handleShare}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
            >
              <Share2 className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Share</span>
            </div>
          </div>

          {/* Doctor reply */}
          <div className="mb-6 p-4 bg-gray-50 rounded">
            {q.hasDoctorReplied ? (
              <p className="text-green-800 font-semibold">
                Doctor Kays has replied:
              </p>
            ) : (
              <p className="text-red-800 font-semibold">No reply yet</p>
            )}
            {q.answer && <p className="mt-2 text-gray-700">{q.answer}</p>}
          </div>

          {/* Comments */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {comments.length ? (
              comments.map((c, i) => (
                <div key={i} className="border-b pb-3 mb-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{c.user}</span>
                    <span>{new Date(c.date).toLocaleDateString("en-CA")}</span>
                  </div>
                  <p className="mt-1 text-gray-800">{c.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

          {/* Comment form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={3}
              className="w-full border p-2 rounded"
              placeholder="Add a comment…"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className={`px-4 py-2 rounded text-white ${
                submitting ? "bg-gray-400" : "bg-primary hover:opacity-90"
              }`}
            >
              {submitting ? "Posting…" : "Post Comment"}
            </button>
          </form>
        </div>
      </div>
      <RightSidebar />
      </div>
      <FooterFull />
    </>
  );
}
