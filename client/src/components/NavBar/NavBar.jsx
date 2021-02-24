import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/restaurants">All Restaurants</Link>
            <Link to="/admin">Admin</Link>
        </div>
    );
};

export default NavBar;