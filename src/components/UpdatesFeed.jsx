import { Megaphone } from "lucide-react";

export default function UpdatesFeed({ updates = [] }) {
  return (
    <section className="bg-white border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b flex items-center gap-2">
        <Megaphone className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Updates</h2>
      </div>
      <ul className="divide-y">
        {updates.map((u, idx) => (
          <li key={idx} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="font-medium text-gray-900">{u.title}</div>
              <div className="text-xs text-gray-500">{u.time}</div>
            </div>
            <p className="text-sm text-gray-600">{u.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
