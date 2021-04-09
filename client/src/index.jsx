import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './component/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.href = "http://localhost:3000/userprofile"
  );
};

ReactDOM.render((
    <Auth0Provider
      domain="dev-4s-y99dk.us.auth0.com"
      clientId="PsytfJjp5lrzN6wvoRn1WEi3ftK1fSxH"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Auth0Provider>
), document.getElementById('app'));