// src/components/Breadcrumbs.tsx

import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';

const Breadcrumbs = () => {
  const crumbs = useBreadcrumbs();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((crumb, idx) => (
        <span key={crumb.path}>
          <Link to={crumb.path}>{crumb.label}</Link>
          {idx < crumbs.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
