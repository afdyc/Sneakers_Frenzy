import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <header className="w-full h-screen px-[40px]">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col -mt-10 px-[40px]">
          <div className="overflow-hidden">
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl font-bold mb-2 md:text-[52px] md:leading-[50px]"
            >
              Account Log In
            </motion.h1>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ delay: 0.75, duration: 0.75 }}
              className="mb-4"
            >
              Please enter your details below.
            </motion.p>
          </div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            <input
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(e.target.value);
              }}
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="text"
              value={username}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="username"
            >
              Username
            </label>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative mt-20"
          >
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
              }}
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="password"
              value={password}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.75, duration: 0.75 }}
            className="mt-20"
          >
            <a href="/register">
              Don't have an account?{" "}
              <span className="text-[#111111] font-semibold hover:text-gray-400 duration-300">
                Register
              </span>
            </a>
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 flex justify-center text-white"
          >
            <button
              className="w-28 h-12 text-[16px] leading-6 font-bold text-[#111111] border-2 border-black hover:text-white hover:bg-[#111111] rounded-lg duration-300"
              type="submit"
            >
              login
            </button>
          </motion.div>
        </div>
      </form>
    </header>
  );
};

export default Login;
