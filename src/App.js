import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Atividades } from './views/Atividades'
import { Sobre } from './views/Sobre'
import { Perfil } from './views/Perfil'
import { Horas } from './views/Horas'
import { Duvidas } from './views/Duvidas'
import { Orgs } from './views/Organizacoes'

import './styles/reset.css'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/sobre' component={Sobre}/>
        <Route path='/horas' component={Horas}/>
        <Route path='/atividades' component={Atividades}/>
        <Route path='/orgs' component={Orgs}/>
        <Route path='/duvidas' component={Duvidas}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='*'><Redirect to='/sobre'/></Route>
      </Switch>
    </div>
  );
}

export default App;
