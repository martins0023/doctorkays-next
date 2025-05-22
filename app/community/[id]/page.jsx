// app/community/[id]/page.jsx
import { notFound } from "next/navigation"
import QuestionDetailClient from "./QuestionDetailClient"

export async function generateMetadata({ params }) {
  const { id } = params
  const API_BASE = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${API_BASE}/api/questions/${id}`)
  if (!res.ok) return { title: "Question not found" }
  const q = await res.json()

  return {
    title: q.title,
    description: q.question,
    openGraph: {
      title: q.title,
      description: q.question,
      url: `/community/${id}`,
      siteName: "Doctor Kays",
    },
    twitter: {
      card: "summary_large_image",
      title: q.title,
      description: q.question,
    },
  }
}

export default async function QuestionDetailPage({ params }) {
  const { id } = params
  const API_BASE = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${API_BASE}/api/questions/${id}`, { cache: "no-store" })
  if (!res.ok) notFound()
  const q = await res.json()

  return (
    <div>
      <QuestionDetailClient initialQuestion={q} />
    </div>
  )
}
