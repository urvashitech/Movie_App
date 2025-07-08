import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div>
        <Link to='/'> Movie App </Link>
      </div>
      <div style={{marginTop:"10px"}}>
        <Link to = '/' style={{marginRight:"10px"}}>Home</Link>
        <Link to='/favorites' >Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar
