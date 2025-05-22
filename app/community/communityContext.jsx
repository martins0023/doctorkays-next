// app/community/communityContext.jsx
"use client";

import { createContext, useContext, useState } from "react";

const CommunityContext = createContext();
export const useCommunity = () => useContext(CommunityContext);

export default function CommunityProvider({ children, questions: initialQuestions }) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedIds, setLikedIds] = useState([]);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // Submit new question
  const handleQuestionSubmit = async (formData) => {
    try {
      const res = await fetch(`${API_BASE}/api/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setQuestions((prev) => [data, ...prev]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  // Like a question
  const handleLike = async (id) => {
    if (likedIds.includes(id)) return;
    setLikedIds((prev) => [...prev, id]);
    setQuestions((prev) =>
      prev.map((q) => (q._id === id ? { ...q, likes: q.likes + 1 } : q))
    );
    try {
      const res = await fetch(`${API_BASE}/api/questions/${id}/reactions`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "like" }),
      });
      const updated = await res.json();
      setQuestions((prev) =>
        prev.map((q) => (q._id === id ? updated : q))
      );
    } catch (err) {
      console.error("Like failed:", err);
      // rollback
      setQuestions((prev) =>
        prev.map((q) =>
          q._id === id ? { ...q, likes: q.likes - 1 } : q
        )
      );
      setLikedIds((prev) => prev.filter((qid) => qid !== id));
    }
  };

  return (
    <CommunityContext.Provider
      value={{
        questions,
        isModalOpen,
        setIsModalOpen,
        likedIds,
        handleQuestionSubmit,
        handleLike,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
}