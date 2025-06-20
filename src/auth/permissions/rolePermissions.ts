// src/auth/permissions/rolePermissions.ts

export const rolePermissions = {
  admin: ['*'],
  moderator: ['review_content', 'hide_comment', 'ban_user'],
  contributor: ['create_page', 'edit_own_page', 'submit_thread'],
  researcher: ['read_drafts'],
  viewer: ['read_public'],
};

// Optional helper:
export const can = (role: keyof typeof rolePermissions, action: string): boolean => {
  const permissions = rolePermissions[role] || [];
  return permissions.includes('*') || permissions.includes(action);
};
