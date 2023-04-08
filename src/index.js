import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PagesProvider } from './contexts/app.context'
import { UserProvider } from './contexts/user.context'
import { ActivitiesProvider } from './contexts/activities.context'
import { Auth0Provider } from '@auth0/auth0-react'

const uri = process.env.REACT_APP_URI

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ActivitiesProvider>
        <PagesProvider>
          <UserProvider>
            <Auth0Provider
              domain={process.env.REACT_APP_DOMAIN}
              clientId={process.env.REACT_APP_CLIENTID}
              redirectUri={uri}
            >
              <App />
            </Auth0Provider>
          </UserProvider>
        </PagesProvider>
      </ActivitiesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
