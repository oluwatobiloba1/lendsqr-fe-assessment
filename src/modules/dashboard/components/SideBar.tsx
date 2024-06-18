import React from "react";
import "../styles/side-bar.scss";
import { Link } from "@tanstack/react-router";

const sideBarMenuItems = [
  {
    group: "customers",
    name: "users",
    url: "/users",
    icon: "/side-bar/users",
  },
  {
    group: "customers",
    name: "Guarantors",
    url: "/users",
    icon: "/side-bar/guarantors",
  },
  {
    group: "customers",
    name: "Loans",
    url: "/users",
    icon: "/side-bar/loans",
  },
  {
    group: "customers",
    name: "Decision Models",
    url: "/users",
    icon: "/side-bar/decision-models",
  },
  {
    group: "customers",
    name: "Savings",
    url: "/users",
    icon: "/side-bar/savings",
  },
  {
    group: "customers",
    name: "Loan Requests",
    url: "/users",
    icon: "/side-bar/loan-request",
  },
  {
    group: "customers",
    name: "Whitelist",
    url: "/users",
    icon: "/side-bar/whitelist",
  },
  {
    group: "customers",
    name: "Karma",
    url: "/users",
    icon: "/side-bar/karma",
  },
  {
    group: "businesses",
    name: "Organization",
    url: "/users",
    icon: "/side-bar/organization",
  },
  {
    group: "businesses",
    name: "Loan Products",
    url: "/users",
    icon: "/side-bar/loans",
  },
  {
    group: "businesses",
    name: "Savings Products",
    url: "/users",
    icon: "/side-bar/savings-products",
  },
  {
    group: "businesses",
    name: "Fees and Charges",
    url: "/users",
    icon: "/side-bar/fees-and-charges",
  },
  {
    group: "businesses",
    name: "Transactions",
    url: "/users",
    icon: "/side-bar/transactions",
  },
  {
    group: "businesses",
    name: "Services",
    url: "/users",
    icon: "/side-bar/services",
  },
  {
    group: "businesses",
    name: "Service Account",
    url: "/users",
    icon: "/side-bar/service-account",
  },
  {
    group: "businesses",
    name: "Settlements",
    url: "/users",
    icon: "/side-bar/settlements",
  },
  {
    group: "businesses",
    name: "Reports",
    url: "/users",
    icon: "/side-bar/reports",
  },
  {
    group: "settings",
    name: "Preferences",
    url: "/users",
    icon: "/side-bar/preferences",
  },
  {
    group: "settings",
    name: "Fees and Pricing",
    url: "/users",
    icon: "/side-bar/fees-and-pricing",
  },
  {
    group: "settings",
    name: "Audit Logs",
    url: "/users",
    icon: "/side-bar/audit-logs",
  },
];

export interface ISidebar {
  slideSidebar: boolean;
}
const Sidebar: React.FC<ISidebar> = ({ slideSidebar }) => {
  return (
    <>
      <div
        className={`sidebar-container ${
          !slideSidebar ? "sidebar-transform" : ""
        }`}
      >
        <div className="input-group">
          <input
            id="search"
            type="text"
            name="search"
            placeholder="search for anything"
          />
          <button className="search-button">
            <i className="fi fi-rs-search"></i>
          </button>
        </div>
        <div className="menus-name switch-org">
          <img src="/side-bar/switch-org.svg" alt="" width={15} height={15} />
          <p>switch organization</p>
          <i className="">{">"}</i>
        </div>
        <div className="menus-name dashboard">
          <img src="/side-bar/dashboard.svg" alt="" />
          <p>dashboard</p>
        </div>
        <div>
          <h5>Customers</h5>
          <div>
            {sideBarMenuItems
              .filter((item) => item.group === "customers")
              .map((menuItem) => (
                <MenuItem key={menuItem.name} menuItem={menuItem} />
              ))}
          </div>
        </div>
        <div>
          <h5>Businesses</h5>
          <div>
            {sideBarMenuItems
              .filter((item) => item.group === "businesses")
              .map((menuItem) => (
                <MenuItem key={menuItem.name} menuItem={menuItem} />
              ))}
          </div>
        </div>
        <div>
          <h5>Settings</h5>
          <div>
            {sideBarMenuItems
              .filter((item) => item.group === "settings")
              .map((menuItem) => (
                <MenuItem key={menuItem.name} menuItem={menuItem} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const MenuItem = ({ menuItem }: { menuItem: (typeof sideBarMenuItems)[0] }) => {
  return (
    <>
      <div
        className={`menus-name menu-items ${
          menuItem.name === "users" ? "active-item" : ""
        }`}
      >
        <img src={`${menuItem.icon}.svg`} alt="" />
        <Link to={menuItem.url}>
          <p>{menuItem.name}</p>
        </Link>
      </div>
    </>
  );
};
