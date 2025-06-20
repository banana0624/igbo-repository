// src/config/adminNav.ts

export type Role = 'admin' | 'editor' | 'moderator';

export interface AdminNavItem {
  label: string;
  path: string;
  roles: Role[];
}

export const adminNavLinks: AdminNavItem[] = [
  { label: 'Dashboard', path: '/admin', roles: ['admin', 'editor', 'moderator'] },
  { label: 'Users', path: '/admin/users', roles: ['admin', 'moderator'] },
  { label: 'Settings', path: '/admin/settings', roles: ['admin'] }
];
