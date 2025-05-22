"use client";

export default function RightSidebar() {
  return (
    <aside className="hidden md:block md:w-1/4 p-4 rounded shadow">
      <h3 className="font-bold mb-2">Search</h3>
      <input
        type="text"
        placeholder="Search questions..."
        className="w-full border p-2 rounded text-sm text-gray-800"
      />
    </aside>
  );
}
