import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <form className="h-[75%] flex flex-col justify-evenly items-center">
      <h2 className="text-white text-2xl tracking-wider ">Login</h2>
      <input
        type="text"
        className="bg-transparent text-white focus:outline-none border-b-[1px] tracking-wide w-[80%]  "
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        className="bg-transparent text-white focus:outline-none border-b-[1px] tracking-wide w-[80%]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="bg-slate-100 text-white rounded-2xl py-1 px-3 bg-opacity-30 hover:bg-opacity-80 hover:text-black transition-all"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
