import { Activity, TrendingUp } from "lucide-react";

export default function ProgressOverview({ progress }) {
  const { overall, streak, hours, nextGoal } = progress;
  return (
    <section className="bg-white border rounded-2xl p-6 grid md:grid-cols-4 gap-4">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>
        </div>
        <p className="text-sm text-gray-600">Learning adjusts based on your performance. Keep up the streak!</p>
      </div>
      <Stat label="Overall" value={`${overall}%`} accent="from-indigo-500 to-fuchsia-500" />
      <Stat label="Streak" value={`${streak} days`} accent="from-emerald-500 to-teal-500" />
      <Stat label="Study Time" value={`${hours} hrs`} accent="from-amber-500 to-rose-500" />
      <div className="md:col-span-2 flex items-center justify-between bg-gradient-to-tr from-indigo-50 to-fuchsia-50 border rounded-xl p-4">
        <div>
          <div className="text-sm text-gray-600">Next goal</div>
          <div className="text-base font-medium text-gray-900">{nextGoal}</div>
        </div>
        <div className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium">
          <TrendingUp className="h-4 w-4" /> Improving
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${accent}`}>{value}</div>
    </div>
  );
}
