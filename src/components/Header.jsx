import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/info'>info</Link></li>
        <li><Link to='/blogs'>blog posts</Link></li>
        <li><Link to='/photos_videos'>photos & videos</Link></li>
        <li><Link to='/destinations'>destinations</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header