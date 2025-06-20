// src/components/RoleGuard.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { Role } from '../config/adminRoutes';

interface RoleGuardProps {
  allowed: Role[];
  children: React.ReactNode;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ allowed, children }) => {
  const { role } = useAuth();

  return allowed.includes(role)
    ? <>{children}</>
    : <Navigate to="/unauthorized" replace />;
};

export default RoleGuard;
