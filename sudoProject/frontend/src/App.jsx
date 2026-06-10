import React, { useEffect, useState } from "react";
import api from "./services/api";

const App = () => {
  const [message, setMessage] = useState("");

  async function handleRequest() {
    try {
      const res = await api.get("/connection");
      const result = await res.data.message;
      if (result) setMessage(result);
    } catch (error) {
      console.log(error.data.detail);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div>
      <h1>Neon Database Connection</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
