import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="app-container">{children}</div>;
};

export default AppLayout;
