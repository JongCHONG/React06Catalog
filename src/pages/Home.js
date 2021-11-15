import React, { Component } from 'react'

import catalog from '../catalog.json'

class Home extends Component {
  render() {
    return (
      <div className="container">
        {catalog.map(element => 
          <div>
            {element.title}
          </div>
        )}
      </div>
    )
  }
}

export default Home