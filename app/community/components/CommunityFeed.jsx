// app/community/components/CommunityFeed.jsx
"use client";

import Header from "./Header";
import Actions from "./Actions";
import LeftSidebar from "./LeftSidebar";
import MainFeed from "./MainFeed";
import RightSidebar from "./RightSidebar";

export default function CommunityFeed() {
  return (
    <div className="max-w-7xl mx-auto md:pt-20 pt-10 px-6">
      <Header />
      <Actions />
      <div className="flex flex-col md:flex-row gap-6">
        <LeftSidebar />
        <MainFeed />
        <RightSidebar />
      </div>
    </div>
  );
}