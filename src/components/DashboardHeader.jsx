import { Bell, Settings, User } from "lucide-react";

export default function DashboardHeader({ userName = "Student" }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">PL</div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Personalized Learning</h1>
            <p className="text-xs text-gray-500">Adaptive insights for your journey</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white hover:bg-gray-50">
            <Bell className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-[10px] text-white grid place-items-center">3</span>
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white hover:bg-gray-50">
            <Settings className="h-5 w-5 text-gray-700" />
          </button>
          <div className="flex items-center gap-2 pl-3 ml-2 border-l">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
              <User className="h-5 w-5" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-sm font-medium text-gray-900">{userName}</div>
              <div className="text-xs text-gray-500">Learner</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
