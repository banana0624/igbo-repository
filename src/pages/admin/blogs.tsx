// src/pages/admin/blogs.tsx
import AdminLayout from '@layouts/AdminLayout';

const mockContents = [
  {
    id: 1,
    type: 'blog',
    title: 'First Blog Post',
    author: 'moderator1',
    date: '2025-06-15',
    excerpt: 'This is the content of the first blog post...'
  },
  {
    id: 2,
    type: 'forum',
    title: 'Forum Guidelines',
    author: 'admin',
    date: '2025-06-16',
    excerpt: 'Please follow the forum guidelines for healthy discourse...'
  }
];

export default function AdminBlogsPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Content Manager</h1>
      <div className="space-y-4">
        {mockContents.map(entry => (
          <div key={entry.id} className="bg-white shadow p-4 rounded border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{entry.title}</h2>
            <p className="text-sm text-gray-500 mb-1">By {entry.author} • {entry.date} • Type: {entry.type}</p>
            <p className="text-gray-700 mb-3">{entry.excerpt}</p>
            <div className="space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Edit</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
