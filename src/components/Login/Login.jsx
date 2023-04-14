import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("Hello Google");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Signin Via Google</button>
    </div>
  );
};

export default Login;
