// src/pages/admin/users.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockUsers = [
  { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin', loginAttempts: 0 },
  { id: 2, username: 'moderator1', email: 'moderator1@example.com', role: 'moderator', loginAttempts: 1 },
  { id: 3, username: 'user1', email: 'user1@example.com', role: 'user', loginAttempts: 0 }
  // Add more as needed for preview
];

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <table className="w-full table-auto bg-white rounded shadow overflow-hidden">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="p-3 text-left">Username</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Login Attempts</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map(user => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`px-2 py-1 text-sm rounded-full text-white ${
                  user.role === 'admin' ? 'bg-red-600' :
                  user.role === 'moderator' ? 'bg-yellow-600' : 'bg-gray-600'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="p-3">{user.loginAttempts}</td>
              <td className="p-3 space-x-2">
                <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded">Edit</button>
                <button className="text-sm px-3 py-1 bg-red-600 text-white rounded">Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
