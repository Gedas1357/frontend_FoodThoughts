import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="w-screen h-16 bg-gray-300 complete-center">
            <ul className="flex flex-row w-screen h-16 items-center justify-evenly ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/ingredients">Ingredients</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;