// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import { adminRoutes } from './config/adminRoutes';
import RoleGuard from './components/RoleGuard';
import Error404 from './routes/Error404';
import Unauthorized from './routes/Unauthorized';
import './styles/global.css';

const App = () => {
  return (
    <Routes>
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/admin" element={<AdminLayout />}>
        {adminRoutes.map(({ path, element, roles }) => {
          const base = '/admin';
          const childPath = path.startsWith(base)
            ? path.slice(base.length).replace(/^\/?/, '')
            : path;

          return (
            <Route
              key={path}
              path={childPath || ''}
              element={<RoleGuard allowed={roles}>{element}</RoleGuard>}
            />
          );
        })}

        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>

      {/* Optional: public routes */}
    </Routes>
  );
};

export default App;
