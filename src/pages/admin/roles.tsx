// src/pages/admin/roles.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockRoles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Full access to system and moderation',
    users: ['admin']
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Can edit and publish content',
    users: ['moderator1']
  },
  {
    id: 3,
    name: 'User',
    description: 'Can view and comment on content',
    users: ['user1', 'user2', 'user3']
  }
];

export default function AdminRolesPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Roles</h1>
      <div className="space-y-6">
        {mockRoles.map((role) => (
          <div key={role.id} className="bg-white rounded shadow p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-emerald-700">{role.name}</h2>
              <span className="text-gray-400 text-sm">ID #{role.id}</span>
            </div>
            <p className="text-gray-700 mb-4">{role.description}</p>
            <div>
              <p className="text-sm text-gray-600 mb-1">Assigned Users:</p>
              <div className="flex flex-wrap gap-2">
                {role.users.map((username) => (
                  <span
                    key={username}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
                  >
                    {username}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
