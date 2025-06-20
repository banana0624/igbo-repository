import React, { lazy } from 'react';
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineSetting,
} from 'react-icons/ai';

export type Role = 'admin' | 'editor' | 'moderator';

export interface AdminRoute {
  label: string;
  path: string;
  roles: Role[];
  icon: React.ReactNode;
  element: React.ReactNode;
}

// Lazy-loaded route components
const Dashboard = lazy(() => import('../routes/dashboard'));
const UserList = lazy(() => import('../routes/users'));
const AdminSettings = lazy(() => import('../routes/settings'));

export const adminRoutes: AdminRoute[] = [
  {
    label: 'Dashboard',
    path: '/admin',
    roles: ['admin', 'editor', 'moderator'],
    icon: <AiFillHome />,
    element: <Dashboard />,
  },
  {
    label: 'Users',
    path: '/admin/users',
    roles: ['admin', 'moderator'],
    icon: <AiOutlineUser />,
    element: <UserList />,
  },
  {
    label: 'Settings',
    path: '/admin/settings',
    roles: ['admin'],
    icon: <AiOutlineSetting />,
    element: <AdminSettings />,
  },
];
