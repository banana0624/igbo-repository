// Dashboard Landing
// src/pages/admin/index.tsx
import AdminLayout from '@layouts/AdminLayout';

export default function AdminHome() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor users, roles, activity, and community health.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Summary Cards */}
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl text-emerald-700 font-bold">42</p>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Roles</h2>
            <p className="text-3xl text-indigo-600 font-bold">3</p>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-2">Pending Flags</h2>
            <p className="text-3xl text-red-500 font-bold">6</p>
          </div>

          <div className="bg-white shadow rounded p-6 col-span-1 sm:col-span-2 lg:col-span-3">
            <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>🟢 User <strong>moderator1</strong> posted in “Tech Talk”</li>
              <li>🟠 Comment flagged under “Healthy Living Tips”</li>
              <li>🔵 User <strong>admin</strong> edited blog post “Forum Guidelines”</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
