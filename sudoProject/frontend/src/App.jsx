import { useEffect, useState } from "react";
import api from "../src/services/api";

const App = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  async function getResponse() {
    try {
      const res = await api.post("/data?name=ravan");
      const result = res.data.message;
      if (result) setMsg(result);
    } catch (error) {
      setError(error.response.data.detail);
    }
  }

  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div>
      <h1>hello</h1>
      <h1>{msg}</h1>
      <h1>{error}</h1>
    </div>
  );
};

export default App;
