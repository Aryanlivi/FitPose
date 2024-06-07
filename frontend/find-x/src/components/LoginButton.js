import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    console.log("Is the user authenticated: ", isAuthenticated)

    return (
      !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      )
    ); 
};

export default LoginButton;