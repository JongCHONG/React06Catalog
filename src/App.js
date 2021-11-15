import React, { Component } from 'react'
// on importe les composants du router
import { BrowserRouter, Route, Switch } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Details from './pages/Details'

class App extends Component {
  render() {
    return (
      <BrowserRouter> {/* on place ce composant autour de tout le reste de l'application */}
        <div>
          menu
        </div>
        <Switch> {/* Ce composant ne s'affichera pas à l'écran, il liste les chemins possibles */}
          <Route exact path="/" component={Home}/> {/* Chaque route est représenté par un composant <Route> */}
          <Route path="/details/:id" component={Details} />
          <Route path="*" component={Error404}/> {/* En cas de route non existante, le composant Error404 s'affiche */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App