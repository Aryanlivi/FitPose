import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    console.log("Is the user authenticated: ", isAuthenticated)

    return (
      <React.Fragment>
        {!isAuthenticated && (
          <button
            className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </button>
        )}
      </React.Fragment>
    ); 
};

export default LoginButton;