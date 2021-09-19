import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/reset.css'
import { Menu } from './components/Menu'
import { ThemeProvider } from 'styled-components'
import { themeLight } from './util/themes'
import constants from './util/constants'
import { Page } from './styles/base-styles'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <Menu />
        <Page>
          <Switch>
            {constants.pages.map((path, index) => (
              <Route path={path.path} component={path.component} key={index} />
            ))}
            <Route path="*">
              <Redirect to="/sobre" />
            </Route>
          </Switch>
        </Page>
      </div>
    </ThemeProvider>
  )
}

export default App
