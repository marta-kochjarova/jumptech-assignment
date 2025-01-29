import React, { useEffect, useState } from "react";
import { User } from "../types/User";
import { getCurrentUser } from "../api/users";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <header className="header bg-white">
      <h3 className="app-title fw-normal">INTRANET</h3>
      <div className="dropdown">
          <button className="dropdown-button">
            {currentUser != null
              ? `${currentUser.firstName} ${currentUser.lastName} (${currentUser.username})`
              : ""}
          </button>
          <div className="dropdown-menu">
            <Link to="/">Log out</Link>
          </div>
        </div>
    </header>
  );
};

export default Header;
