// src/pages/admin/activity.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockLogs = [
  { id: 1, user: 'admin', action: 'Logged in', created_at: '2025-06-17 10:00' },
  { id: 2, user: 'moderator1', action: 'Viewed content on Igbo culture', created_at: '2025-06-17 10:12' },
  { id: 3, user: 'user1', action: 'Posted a comment', created_at: '2025-06-17 11:20' },
  { id: 4, user: 'user2', action: 'Edited profile settings', created_at: '2025-06-17 11:45' }
];

export default function AdminActivityPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Activity Logs</h1>
      <table className="w-full table-auto bg-white rounded shadow">
        <thead className="bg-gray-800 text-white text-left">
          <tr>
            <th className="p-3">User</th>
            <th className="p-3">Action</th>
            <th className="p-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {mockLogs.map(log => (
            <tr key={log.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{log.user}</td>
              <td className="p-3">{log.action}</td>
              <td className="p-3 text-sm text-gray-500">{log.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
