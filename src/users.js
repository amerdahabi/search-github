import React from "react";
import { UserContext } from "./user.context";
import { Card } from "react-bootstrap";

const Users = () => {
  const { users, loading, error } = React.useContext(UserContext);

  if (error) {
    return <div>{`error fetching ${error}...`}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!users || users.length === 0) {
    return <div>No result..</div>;
  }

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
              <Card.Title>User name: {user.login}</Card.Title>
              <Card.Link href={user.html_url}>
                Github page: {user.login}
              </Card.Link>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Users;
