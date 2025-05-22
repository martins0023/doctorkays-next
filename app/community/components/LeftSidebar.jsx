// app/community/components/LeftSidebar.jsx
"use client";

import { HomeIcon, LucideBarChartBig, FileQuestionIcon, Bell } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="hidden md:block md:w-1/4  p-4 rounded">
      <p className="mb-3 opacity-50">Main Menu</p>
      <nav className="space-y-5">
        {[
          { icon: HomeIcon, label: 'Home' },
          { icon: LucideBarChartBig, label: 'Categories' },
          { icon: FileQuestionIcon, label: 'My Questions' },
          { icon: Bell, label: 'Notifications' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-row items-center gap-2 space-y-4">
            <Icon className="mt-3" />
            <a href="#" className="block text-gray-600 font-semibold hover:bg-gray-950">
              {label}
            </a>
          </div>
        ))}
      </nav>
    </aside>
  );
}