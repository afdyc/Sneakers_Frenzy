import React, { useState } from "react";
// import { motion } from "framer-motion";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const authSuccess = () => {
    // console.log("here2");
    console.log("you've logged in");
    if (user.loggedIn) return;
    setUser({ loggedIn: true });

    if (location.state?.from) {
      navigate(location.state.from);
    }
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
          authSuccess();
          console.log(response.data);
          navigate(`/cart/${response.data}`);
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
