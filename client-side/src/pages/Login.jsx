import React, { useState } from "react";
import { login } from "../redux/apiCalls";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const Login = () => {
  const [active, setActive] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = () => {
    login(dispatch, { username, password, email });
  };

  return (
    <div>
      <h1>LOGIN</h1>{" "}
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <input
          type={active ? "text" : "password"}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Visibility onClick={() => setActive(true)} />
          <VisibilityOff onClick={() => setActive(false)} />
        </div>
      </div>
      <button onClick={userLogin}>Login</button>
    </div>
  );
};

export default Login;
