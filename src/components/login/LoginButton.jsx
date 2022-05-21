import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerLogin, LoginButtonStyled } from './LoginStyledComponents';
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()
    
  return (
    <ContainerLogin>
      <h1>Logeate</h1>
    <LoginButtonStyled onClick={()=> loginWithRedirect()}>Login</LoginButtonStyled>
  </ContainerLogin>
  )
}

export default LoginButton