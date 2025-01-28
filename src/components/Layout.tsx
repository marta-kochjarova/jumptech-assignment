import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header username="user name" />
      <main className="content">
        <div className="bg-white w-100 h-100 position-relative">
          <Link to="/" className="home-btn text-primary bg-white">GO HOME</Link>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
