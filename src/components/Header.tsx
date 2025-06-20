// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => (
  <header className="py-6 bg-emerald-900 text-white shadow-md">
    <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold">Cultural Echoes</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>Heritage</li>
        <li>Stories</li>
        <li>Artifacts</li>
        <li>Language</li>
        <li>Timeline</li>
      </ul>
    </nav>
  </header>
);

export default Header;
