// src/pages/admin/index.tsx
import AdminLayout from '@layouts/AdminLayout';

export default function AdminHome() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin</h1>
      <p className="text-gray-700">This is your control hub — oversee users, roles, and more.</p>
    </AdminLayout>
  );
}

