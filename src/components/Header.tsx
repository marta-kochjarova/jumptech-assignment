import React, { useEffect, useState } from 'react';
import { User } from '../types/user';
import { getCurrentUser } from '../api/users';

const Header: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
     <header className="header bg-white">
      <span className="app-title">INTRANET</span>
      <div className="current-user text-primary fw-bold">
        {currentUser != null ? `${currentUser.firstName} ${currentUser.lastName} (${currentUser.username})` : ''}
      </div>
    </header>
  );
};

export default Header;
