import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/reset.css'
import { Menu } from './components/Menu'
import { ThemeProvider } from 'styled-components'
import { themeLight } from './util/themes'
import { pages } from './util/constants'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <Menu>
          <Switch>
            {pages.map((path, index) => (
              <Route path={path.path} component={path.component} key={index} />
            ))}
            <Route path="*">
              <Redirect to="/sobre" />
            </Route>
          </Switch>
        </Menu>
      </div>
    </ThemeProvider>
  )
}

export default App
