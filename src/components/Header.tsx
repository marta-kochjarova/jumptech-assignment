import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
     <header className="header bg-white">
      <span className="app-title">INTRANET</span>
      <div className="current-user text-primary">{username}</div>
    </header>
  );
};

export default Header;
