import { useState } from "react";
import api from "./services/api";

const App = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  async function handleRequest(e) {
    e.preventDefault();

    try {
      const res = await api.post("/connection", user);
      const result = await res.data.message;
      if (result) setMessage(result);
    } catch (error) {
      console.log(error.data.detail);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Neon Database Connection</h1>
      <form onSubmit={handleRequest}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;
