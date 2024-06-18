import { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";
import "../styles/dashboard.scss";

const UsersList = () => {
  const [users, setUsers] = useState<Array<User> | undefined>(undefined);
  useEffect(() => {
    fetch("https://api.json-generator.com/templates/30C9q8oYFLjH/data", {
      headers: {
        Authorization: "Bearer jbn3f6m14thhlr9qi6wnf619jo4dcloyi3y55izt",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    console.log({ users });
  }, [users]);
  if (!users) {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Users</h2>
      <div className="stats-count">
        <div className="stats-card">
          <div style={{ backgroundColor: "rgba(223, 24, 255, 0.1)" }}>
            <img src="/users-count.png" />
          </div>
          <p>Users</p>
          <h3>2,453</h3>
        </div>
        <div className="stats-card">
          <div style={{ backgroundColor: "rgba(87, 24, 255, 0.1)" }}>
            <img src="/active-count.png" />
          </div>
          <p>Active Users</p>
          <h3>2,453</h3>
        </div>
        <div className="stats-card">
          <div style={{ backgroundColor: "rgba(245, 95, 68, 0.1)" }}>
            <img src="/loan-count.png" />
          </div>
          <p>Users with Loans</p>
          <h3>12,453</h3>
        </div>
        <div className="stats-card">
          <div style={{ backgroundColor: "rgba(255, 51, 102, 0.1)" }}>
            <img src="/savings-count.png" />
          </div>
          <p>Users with Savings</p>
          <h3>102,453</h3>
        </div>
      </div>
      <div className="table-view">
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UsersList;
