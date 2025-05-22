// app/community/page.jsx
import FooterFull from "../../components/FooterFull";
import Navbar from "../../components/Navbar";
import CommunityProvider from "./communityContext";
import CommunityFeed from "./components/CommunityFeed";

export const metadata = {
  title: "Community Forum | Doctor Kays",
  description:
    "Join Doctor Kays Community Forum: ask questions, get answers, and connect with fellow health enthusiasts.",
  openGraph: {
    title: "Community Forum",
    description:
      "Ask medical questions and get expert answers in Doctor Kays Community Forum.",
    url: "/community",
    siteName: "Doctor Kays",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Forum",
    description:
      "Join Doctor Kays Community Forum: ask questions, get answers, and connect with fellow health enthusiasts.",
  },
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default async function CommunityPage() {
  // Server‐side fetch for SEO & fast initial load
  const res = await fetch(`${API_BASE}/api/questions`, { cache: "no-store" });
  const questions = await res.json();

  return (
    <div>
      <Navbar />
      <CommunityProvider questions={questions}>
        <CommunityFeed />
      </CommunityProvider>
      <FooterFull />
    </div>
  );
}