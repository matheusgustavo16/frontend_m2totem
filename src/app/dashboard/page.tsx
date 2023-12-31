import ActivityFeed from "@/components/dashboard/feed";
import GeneralStats from "@/components/dashboard/generalStats";

export default function DashboardPage() {
  return (<>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <GeneralStats />
        {/* LISTA FEED */}
        <ActivityFeed />
      </div>
    </main>
  </>)
};
