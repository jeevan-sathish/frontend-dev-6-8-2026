import { GoogleLogin } from "@react-oauth/google";

import api from "./services/api";
import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  async function handleAuth(response) {
    if (response.credential) {
      try {
        const res = await api.post("/googleAuth", {
          token: response.credential,
        });
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        setMessage(error.response.data.detail);
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setMessage("Already Logged In");
    }
  }, []);
  return (
    <div>
      <GoogleLogin
        onSuccess={handleAuth}
        onError={() => console.log("failed")}
      />

      <h1>{message}</h1>
    </div>
  );
};

export default App;
