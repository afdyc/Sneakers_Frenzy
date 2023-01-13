import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/newuser`, {
        username,
        password,
      });
      notifySuccess();
    } catch (error) {
      console.log(error.response.data);
      notifyError();
    }
  };

  const notifyError = () => {
    toast.error("Username is already used, please use a different username.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifySuccess = () => {
    toast.success("Your account has been created.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <header>
      <section>
        <form onSubmit={newUser}>
          <div>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <label>Username</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <label>Password</label>
          </div>
          <button type="submit">Register</button>
          <ToastContainer />
        </form>
      </section>
    </header>
  );
};

export default Register;
