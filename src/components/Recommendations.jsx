import { BookOpen, Sparkles } from "lucide-react";

export default function Recommendations({ items = [] }) {
  return (
    <section className="bg-white border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Smart Recommendations</h2>
        </div>
        <span className="text-sm text-gray-500">Tailored for you</span>
      </div>
      <ul className="divide-y">
        {items.map((rec, idx) => (
          <li key={idx} className="px-6 py-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center flex-shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{rec.title}</div>
              <p className="text-sm text-gray-600">{rec.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {rec.tags?.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 px-2.5 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
