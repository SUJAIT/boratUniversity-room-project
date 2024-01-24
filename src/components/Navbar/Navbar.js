import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextAuth';

const Navbar = () => {

     const {user,logOut} = useContext(AuthContext)

      const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sm-4">
      <div className="container-fluid">

        <a className="navbar-brand" href="/" style={{ color: 'blue' }}><strong>Hotel Booking</strong></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'blue' }}>Home</Link>
            </li>

            <li>
              <div className="dropdown">
                <button
                  className="btn btn-info opacity-50 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Category of different room
                </button>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/singleroom">Single Room</Link></li>
                  <li><Link className="dropdown-item" to="/studio">Studio</Link></li>
                  <li><Link className="dropdown-item" to="/doublerroom">Double Room</Link></li>
                  <li><Link className="dropdown-item" to="/presidentialsuit">Presidential Suite</Link></li>
                </ul>
              </div>
            </li>

          </ul>
          <Button>
                {
                            user? <Link className="nav-link active" aria-current="page" onClick={handleLogOut} >Logout</Link> : <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                         }
          </Button>

  
          


        </div>
      </div>
    </nav>
  )

}

export default Navbar;