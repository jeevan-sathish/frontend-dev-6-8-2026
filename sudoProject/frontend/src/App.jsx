import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import api from "./services/api";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState();

  async function handleOnsubmit(response) {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
    setToken(response.credential);

    try {
      const res = await api.post("/data", {
        name: decoded.name,
        email: decoded.email,
      });

      const result = await res.data.message;
      if (result) setMessage(result);
    } catch (error) {
      setMessage(error.response.detail);
    }
  }

  return (
    <div>
      <h1>Google Auth</h1>
      <GoogleLogin
        onSuccess={handleOnsubmit}
        onError={() => console.log("login Failed")}
        width={200}
        shape="rectangle"
      />

      <p>{token ? "login success " : "login failed"}</p>
      {user && <img src={user.picture} alt="profile" />}
      <h3>{message}</h3>
    </div>
  );
};

export default App;
