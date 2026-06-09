import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [token, setToken] = useState("");
  const [img, setImg] = useState("");
  function handleOnsubmit(response) {
    const decoded = jwtDecode(response.credential);
    console.log(decoded.name);
    console.log(decoded.email);
    console.log(decoded.picture);
    setToken(response.credential);
    setImg(decoded.picture);
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
      <img src={img} alt="profile" />
    </div>
  );
};

export default App;
