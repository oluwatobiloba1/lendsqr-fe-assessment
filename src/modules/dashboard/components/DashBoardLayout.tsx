import HeaderBar from "./HeaderBar";
import Sidebar from "./SideBar";
import "../styles/layout.scss";
import { useState } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const [slideSideBar, setSlideSideBar] = useState(false);

  return (
    <div>
      <HeaderBar setSlideSideBar={setSlideSideBar} />
      <div className="layout-container">
        <div style={{ zIndex: 0 }}>
          <Sidebar slideSidebar={slideSideBar} />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
