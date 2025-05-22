// app/community/components/AskQuestionModal.jsx
"use client";

import { useState } from "react";
import { useCommunity } from "../communityContext";
import { X } from "lucide-react";

export default function AskQuestionModal() {
  const { setIsModalOpen, handleQuestionSubmit } = useCommunity();
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user.trim() || !title.trim() || !question.trim()) return;
    setSubmitting(true);
    await handleQuestionSubmit({ user, title, question, date: new Date().toISOString() });
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border px-3 py-2 rounded h-24"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-2 rounded hover:opacity-90 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Question"}
          </button>
        </form>
      </div>
    </div>
  );
}
