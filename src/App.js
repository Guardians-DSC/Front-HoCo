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
  console.log('temaa', theme)

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
