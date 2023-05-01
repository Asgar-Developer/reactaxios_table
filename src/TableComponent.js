import Table from "react-bootstrap/Table";

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
              <th>Website</th>

            </tr>
          </thead>
          <tbody>
            {props.user.map((el) => (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.username}</td>
                <td>{el.email}</td>
                <td>{el.website}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
  export default TableComponent