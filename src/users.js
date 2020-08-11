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
        // <li key={user.id} className="user-item">
        //   <div>User name: {user.login}</div>
        // </li>
        <li key={user.id} className="user-item">
          <Card style={{ width: "18rem" }}>
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

// avatar_url: "https://avatars0.githubusercontent.com/u/9213230?v=4"
// events_url: "https://api.github.com/users/cagataycali/events{/privacy}"
// followers_url: "https://api.github.com/users/cagataycali/followers"
// following_url: "https://api.github.com/users/cagataycali/following{/other_user}"
// gists_url: "https://api.github.com/users/cagataycali/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/cagataycali"
// id: 9213230
// login: "cagataycali"
// node_id: "MDQ6VXNlcjkyMTMyMzA="
// organizations_url: "https://api.github.com/users/cagataycali/orgs"
// received_events_url: "https://api.github.com/users/cagataycali/received_events"
// repos_url: "https://api.github.com/users/cagataycali/repos"
// score: 1
// site_admin: false
// starred_url: "https://api.github.com/users/cagataycali/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/cagataycali/subscriptions"
// type: "User"
// url: "https://api.github.com/users/cagataycali"
