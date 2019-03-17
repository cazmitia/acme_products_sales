import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({products, sales}) => {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" exact to="/products">
                        Products <span className="badge badge-primary">{products}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/products/sales">
                        Sales <span className="badge badge-primary">{sales}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/products/createProduct">
                        Create
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
