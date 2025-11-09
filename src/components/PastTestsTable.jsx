import { Calendar, LineChart, Medal } from "lucide-react";

export default function PastTestsTable({ records = [] }) {
  return (
    <section className="bg-white border rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LineChart className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Past Tests</h2>
        </div>
        <span className="text-sm text-gray-500">{records.length} records</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Subject</th>
              <th className="text-left font-medium px-6 py-3">Date</th>
              <th className="text-left font-medium px-6 py-3">Score</th>
              <th className="text-left font-medium px-6 py-3">Percentile</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-6 py-3 font-medium text-gray-900">{r.subject}</td>
                <td className="px-6 py-3 text-gray-600 flex items-center gap-2"><Calendar className="h-4 w-4" />{r.date}</td>
                <td className="px-6 py-3 text-gray-700">{r.score}%</td>
                <td className="px-6 py-3 text-gray-700">Top {r.percentile}%</td>
                <td className="px-6 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${r.trend === 'up' ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : r.trend === 'down' ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-200' : 'bg-gray-50 text-gray-700 ring-1 ring-gray-200'}`}>
                    <Medal className="h-3.5 w-3.5" /> {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
