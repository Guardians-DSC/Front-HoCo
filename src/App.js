import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/reset.css'
import { Menu } from './components/Menu'
import { ThemeProvider } from 'styled-components'
import constants from './util/constants'
import { AppWrapper, Page } from './styles/base-styles'
import usePagesContext from './contexts/app.context'

function App() {
  const { theme } = usePagesContext()

  window.addEventListener('error', function (e) {
    console.error(e.message);
    // prevent React's listener from firing
    e.stopImmediatePropagation();
    // prevent the browser's console error message
    e.preventDefault();
  });

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
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
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
