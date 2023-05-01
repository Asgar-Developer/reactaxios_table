import "./styles.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import axios from "axios";
export default function App() {
  const [user, setUser] = useState([]);
  const getUSer = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUser(response.data));
  };
  useEffect(() => {
    getUSer();
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TableComponent user={user} />
      {/* <table border="1px solid black">
        <tr>
          <td>User_Id</td>

          <td>User_Name</td>
        </tr>

        {user.map((el) => (
          <tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
          </tr>
        ))}
      </table> */}
    </div>
  );
}

let TableComponent = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
