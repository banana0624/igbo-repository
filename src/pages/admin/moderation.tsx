// src/pages/admin/moderation.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockFlags = [
  {
    id: 1,
    type: 'Comment',
    author: 'user1',
    content: 'This comment is controversial...',
    flaggedBy: 'moderator1',
    flaggedAt: '2025-06-17 11:12'
  },
  {
    id: 2,
    type: 'Post',
    author: 'user2',
    content: 'Sensitive content in tech thread...',
    flaggedBy: 'user3',
    flaggedAt: '2025-06-17 11:40'
  }
];

export default function AdminModerationPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Moderation Queue</h1>
      <div className="space-y-4">
        {mockFlags.map(flag => (
          <div key={flag.id} className="bg-white rounded shadow p-4 border border-red-300">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-red-600">{flag.type}</span>
              <span className="text-sm text-gray-500">{flag.flaggedAt}</span>
            </div>
            <p className="mb-1 text-gray-800">
              <strong>{flag.author}</strong>: {flag.content}
            </p>
            <div className="text-sm text-gray-500 mb-2">Flagged by: {flag.flaggedBy}</div>
            <div className="space-x-2">
              <button className="bg-emerald-600 text-white px-3 py-1 rounded text-sm">Resolve</button>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">Warn</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
