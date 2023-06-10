import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Signin = () => {
  const [active, setActive] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handlSubmit = async () => {
    const res = await axios.post("http://localhost:3000/api/register", {
      username,
      email,
      password,
    });
  };

  return (
    <div>
      <h1>SIGN IN</h1>
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
      <button onClick={handlSubmit}>Register</button>
    </div>
  );
};

export default Signin;
