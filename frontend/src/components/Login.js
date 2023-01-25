import React, { useState } from "react";
// import { motion } from "framer-motion";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [userID, setUserID] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();

  const authSuccess = () => {
    console.log("you've logged in");

    if (user.loggedIn) return;
    setUser({ loggedIn: true });

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // if (location.state?.from) {
    //   navigate(location.state.from);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("here");
      await axios
        .post("http://localhost:5000/users/login", {
          username,
          password,
        })
        .then((response) => {
          // console.log(response.data);
          // setUserID(response.data);
          authSuccess();
          navigate(`/`);
        });
    } catch (error) {
      // console.log("here1");
      console.log(error.response.status);
      if (error.response.status !== 200) {
        alert("Username or password is incorrect!");
      }
    }
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(e.target.value);
              }}
              value={username}
            />
            <label>Username</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
              }}
              type="password"
              value={password}
            />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </header>
  );
};

export default Login;
