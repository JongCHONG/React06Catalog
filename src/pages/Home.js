import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalog from '../catalog.json'

class Home extends Component {
  render() {
    return (
      <div className="container">
        {catalog.map(element => 
          <Link
            key={element.id}
            to={`/details/${element.id}`}
          >
            <div className="my-2 d-flex flex-column btn btn-outline-secondary">
              {element.title}
            </div>
          </Link>
        )}
      </div>
    )
  }
}

export default Home