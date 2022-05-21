import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-g2tdj2gy.us.auth0.com"
    clientId="MjQkae6xaNcm8cvxjCYtL5bb8avGbbCF"
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
)
