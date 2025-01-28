import React from 'react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
     <header className="header">
      <h2 className="app-title" style={{ display: 'inline' }}>Intranet </h2>
      <div className="current-user" style={{ display: 'inline' }}>{username}</div>
    </header>
  );
};

export default Header;
