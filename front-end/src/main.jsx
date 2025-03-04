import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-o48jbzeiubjwpg48.us.auth0.com"
    clientId="i9QLoQSIxkofpQ7Cj7kNqZ8PQ2sp6cGY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
