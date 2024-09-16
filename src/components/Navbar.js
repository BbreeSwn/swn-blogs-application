import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
     <Link to="/" className="logo">
     <h3>Blog application</h3>
     </Link>   
    <Link to="/">Home Page</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/about">About me</Link>
    </nav>
  )
}
