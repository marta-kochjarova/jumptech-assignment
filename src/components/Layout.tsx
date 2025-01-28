import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header username="user name" />
      <main
        className="content"
        style={{
          backgroundColor: "hsla(0,100%,50%,1)",
          backgroundImage:
            "radial-gradient(at 40% 20%, hsla(10,46%,55%,1) 0px, transparent 50%)," +
            "radial-gradient(at 80% 0%, hsla(189,51%,43%,1) 0px, transparent 50%)," +
            "radial-gradient(at 0% 50%, hsla(289,40%,36%,1) 0px, transparent 50%)," +
            "radial-gradient(at 80% 50%, hsla(340,39%,37%,1) 0px, transparent 50%)," +
            "radial-gradient(at 0% 100%, hsla(14,34%,56%,1) 0px, transparent 50%)," +
            "radial-gradient(at 80% 100%, hsla(240,50%,38%,1) 0px, transparent 50%)," +
            "radial-gradient(at 0% 0%, hsla(28,76%,67%,1) 0px, transparent 50%)"
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
