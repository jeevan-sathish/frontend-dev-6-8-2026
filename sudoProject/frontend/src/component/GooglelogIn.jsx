import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import api from "../services/api";

const GooglelogIn = () => {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  async function handleOnsubmit(response) {
    try {
      const res = await api.post("/login", {
        credential: response.credential,
      });
      setMessage(res.data.message);
      setToken(res.data.access_token);
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

      <h3>{message}</h3>
      <h1>{token ? "access_token" : "no access_token"}</h1>
    </div>
  );
};

export default GooglelogIn;
