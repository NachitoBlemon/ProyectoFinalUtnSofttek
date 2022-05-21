import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
const {isAuthenticated} = useAuth0()


  return (
    <>
    {isAuthenticated ? 
    <div>
      <LogoutButton/>
          <Profile />
    </div>
          
    :
    <LoginButton />
     
    }
      
    </>
  );
};

export default Login;
