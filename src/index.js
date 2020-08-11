import React from "react";
import ReactDOM from "react-dom";
import UserProvider, { UserContext } from "./user.context";
import Users from "./users";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchInput = () => {
  const { updateUserContext } = React.useContext(UserContext);
  const changeHandel = async (event) => {
    try {
      updateUserContext({ loading: true });
      const req = await fetch(
        `https://api.github.com/search/users?q=${event.target.value}`
      );
      const res = await req.json();
      updateUserContext({ users: res.items });
    } catch (err) {
      updateUserContext({ error: err.message });
    } finally {
      updateUserContext({ loading: false });
    }
  };

  return (
    <input
      type="text"
      className="input"
      placeholder="Search users..."
      onChange={changeHandel}
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <div className="container">
          <div className="header">
            <h1 className="title">Find users on Github</h1>
          </div>
          <div>
            <SearchInput />
          </div>
          <Users />
        </div>
      </UserProvider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
