import { Link } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  )
}

export default Navbar
