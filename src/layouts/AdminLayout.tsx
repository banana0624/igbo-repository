import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { adminRoutes } from '../config/adminRoutes';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';

const AdminLayout = () => {
  const { name, role } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

  return (
    <div className="admin-layout">
      <header className="topbar">
        <h1>Hello, {name} 👋</h1>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.path}>
              <NavLink to={crumb.path}>{crumb.label}</NavLink>
              {idx < breadcrumbs.length - 1 && ' / '}
            </span>
          ))}
        </nav>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode 🌗
        </button>
      </header>

      <motion.aside
        className="sidebar"
        initial={{ x: -48, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <nav aria-label="Admin Navigation">
          <ul>
            {adminRoutes
              .filter(route => route.roles.includes(role))
              .map(route => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    <span className="icon">{route.icon}</span>
                    <span className="label">{route.label}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </motion.aside>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0.8, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.6, y: -16 }}
          transition={{ duration: 0.3 }}
          className="admin-content"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
