import { useLocation } from 'react-router-dom';
import { adminRoutes } from '../config/adminRoutes';

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  return segments.map((_, idx) => {
    const path = '/' + segments.slice(0, idx + 1).join('/');
    const match = adminRoutes.find(route => route.path === path);
    const label = match?.label || path.split('/').pop()!.replace(/-/g, ' ');
    return { label, path };
  });
};
