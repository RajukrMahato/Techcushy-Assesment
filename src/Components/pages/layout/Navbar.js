import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">            
            <div className = "container">
                <div className = "collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to ="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className = "btn btn-outline-light" to= "/users/add">Add Employee</NavLink>
                        </li>                    
                    </ul>
                </div> 
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Employee Name" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar;