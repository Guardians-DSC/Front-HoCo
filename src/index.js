import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PagesProvider } from './contexts/app.context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PagesProvider>
        <App />
      </PagesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
