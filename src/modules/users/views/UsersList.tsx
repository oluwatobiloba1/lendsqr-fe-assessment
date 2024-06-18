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
      <div className="table-view">
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UsersList;
