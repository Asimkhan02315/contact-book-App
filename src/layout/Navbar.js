import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
      <>
   <nav className="navbar text-light bg-success ">  
<div>
<ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="About">
      About
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="Contact">
      Contact
    </Link>
  </li>
</ul>

</div>
<Link className='btn btn-outline-light w-20' to='/AddUser'>Add New Contact</Link>
</nav>
</> 
)
}
export default Navbar