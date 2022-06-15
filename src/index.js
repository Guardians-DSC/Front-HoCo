import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PagesProvider } from './contexts/app.context'
import { UserProvider } from './contexts/user.context'
import { ActivitiesProvider } from './contexts/activities.context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PagesProvider>
        <ActivitiesProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ActivitiesProvider>
      </PagesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
