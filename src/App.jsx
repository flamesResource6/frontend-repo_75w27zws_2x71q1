import { useMemo } from 'react';
import DashboardHeader from './components/DashboardHeader';
import ProgressOverview from './components/ProgressOverview';
import PastTestsTable from './components/PastTestsTable';
import Recommendations from './components/Recommendations';
import UpdatesFeed from './components/UpdatesFeed';

function App() {
  // Mocked data for the prototype UI
  const progress = useMemo(() => ({
    overall: 78,
    streak: 6,
    hours: 12.4,
    nextGoal: 'Reach 80% mastery in Algebra II',
  }), []);

  const pastTests = useMemo(() => ([
    { subject: 'Algebra II', date: 'Oct 2, 2025', score: 82, percentile: 20, status: 'On track', trend: 'up' },
    { subject: 'Biology', date: 'Sep 28, 2025', score: 74, percentile: 35, status: 'Needs review', trend: 'down' },
    { subject: 'World History', date: 'Sep 15, 2025', score: 88, percentile: 15, status: 'Strong', trend: 'flat' },
  ]), []);

  const recommendations = useMemo(() => ([
    { title: 'Algebra: Quadratic Functions', description: 'Practice factorization and graph interpretation based on your recent mistakes.', tags: ['Math', 'Algebra', 'Practice'] },
    { title: 'Cell Biology: Mitosis vs Meiosis', description: 'Watch this 8-min recap video and take the quick quiz.', tags: ['Biology', 'Video', 'Quiz'] },
    { title: 'History: Industrial Revolution', description: 'Review the summary notes and attempt 10 questions.', tags: ['History', 'Notes'] },
  ]), []);

  const updates = useMemo(() => ([
    { title: 'New weekly challenge unlocked', description: 'Complete 3 Algebra sets to earn the Focus badge.', time: '2h ago' },
    { title: 'Teacher shared a custom test', description: '“Algebra II Diagnostic - Unit 3” is now available.', time: 'Yesterday' },
    { title: 'Goal reached: Study streak 5+ days', description: 'Great consistency! Keep it going.', time: '3d ago' },
  ]), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
      <DashboardHeader userName="Ava" />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <ProgressOverview progress={progress} />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PastTestsTable records={pastTests} />
            <Recommendations items={recommendations} />
          </div>
          <div className="space-y-6">
            <UpdatesFeed updates={updates} />
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share progress</h3>
              <p className="text-sm text-gray-600 mb-4">Generate a link with your latest milestones to share with parents or mentors.</p>
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium w-full">Create progress link</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built for personalized, progress-driven learning
      </footer>
    </div>
  );
}

export default App;
