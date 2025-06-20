// src/context/AuthContext.tsx

import { createContext, useContext } from 'react';
import type { Role } from '../config/adminNav';

const dummyUser = {
  name: 'Uzoma',
  role: 'admin' as Role,
};

export const AuthContext = createContext(dummyUser);
export const useAuth = () => useContext(AuthContext);
