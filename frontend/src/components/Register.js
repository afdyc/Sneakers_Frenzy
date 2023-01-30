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
    <header className="w-full h-screen px-[40px]">
      <form
        onSubmit={newUser}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col -mt-10 px-[40px]">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl font-bold mb-2 md:text-[52px] md:leading-[50px]"
          >
            Create New Account
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4"
          >
            Already A Member?{" "}
            <a
              className="text-[#111111] font-semibold hover:text-gray-400 duration-300"
              href="/"
            >
              Log In
            </a>
          </motion.p>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="text"
              value={username}
            />
            <label className="absolute px-3 mt-1 opacity-50 text-sm">
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
              }}
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="password"
              value={password}
            />
            <label className="absolute px-3 mt-1 opacity-50 text-sm">
              Password
            </label>
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-[90px] flex justify-center text-white"
          >
            <button
              className="w-28 h-12 text-[16px] leading-6 font-bold text-[#111111] border-2 border-black hover:text-white hover:bg-[#111111] rounded-lg duration-300"
              type="submit"
            >
              Register
            </button>
            <ToastContainer />
          </motion.div>
        </div>
      </form>
    </header>
  );
};

export default Register;
