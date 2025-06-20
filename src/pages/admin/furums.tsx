// src/pages/admin/forums.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockForums = [
  {
    id: 1,
    name: 'General Discussion',
    description: 'A place for general discussion on various topics.',
    threadCount: 12,
    lastActive: '2025-06-17 10:44'
  },
  {
    id: 2,
    name: 'Tech Talk',
    description: 'Discuss the latest in technology and innovation.',
    threadCount: 8,
    lastActive: '2025-06-17 11:01'
  }
];

export default function AdminForumsPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Forums</h1>
      <div className="space-y-4">
        {mockForums.map(forum => (
          <div key={forum.id} className="bg-white rounded shadow p-4 border">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-semibold text-emerald-800">{forum.name}</h2>
                <p className="text-gray-600">{forum.description}</p>
                <p className="text-sm text-gray-400 mt-1">Threads: {forum.threadCount} • Last active: {forum.lastActive}</p>
              </div>
              <div className="space-x-2 self-start">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">View</button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">Edit</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
