import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Atividades } from './views/Atividades'
import { Sobre } from './views/Sobre'
import { Perfil } from './views/Perfil'
import { Horas } from './views/Horas'
import { Duvidas } from './views/Duvidas'
import { Orgs } from './views/Organizacoes'

import './styles/reset.css'
import { Menu } from './components/Menu'
import { ThemeProvider } from 'styled-components'
import { themeLight } from './util/themes'

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/sobre" component={Sobre} />
          <Route path="/horas" component={Horas} />
          <Route path="/atividades" component={Atividades} />
          <Route path="/orgs" component={Orgs} />
          <Route path="/duvidas" component={Duvidas} />
          <Route path="/perfil" component={Perfil} />
          <Route path="*">
            <Redirect to="/sobre" />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
