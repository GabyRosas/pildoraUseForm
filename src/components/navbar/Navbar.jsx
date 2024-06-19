import React from 'react';
import { NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-white p-2 shadow-md container mx-auto flex items-center justify-between">
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/contact">Contact</NavLink>
<NavLink to="/refund">Refund</NavLink>
<a href="http://localhost:5000/refunds" target="_blank">Refunds</a>

        </nav>
    );
}

export default Navbar;