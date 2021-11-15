import React, { Component } from 'react'

import catalog from '../catalog.json'

class Details extends Component { 
  render() {
    const { id } = this.props.match.params
    const found = catalog.find(element => element.id === Number(id))
    console.log(found)
    return (
      <div className="container">
        <p>
          {found.title}
        </p>
        <p>
          {found.director}
        </p>
        <p>
          {found.stars}
        </p>
        <p>
          {found.image}
        </p>
        <p>
          {found.description}
      </p></
      div>
    )
  }
}

export default Details