import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3, } from '@fortawesome/free-brands-svg-icons';
import {faBars, faShoppingCart, faTimes} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const showButton = () => {
            if (window.innerWidth < 960) {
                setIsButtonVisible(false);
            } else {
                setIsButtonVisible(true);
            }
        };

        showButton();

        window.addEventListener('resize', showButton);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('resize', showButton);
    }, []);


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Better Point
                    <FontAwesomeIcon icon={faTypo3} />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon
                        icon={click ? faTimes : faBars}
                        style={{ color: '#fff' }}
                    />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Servicios
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Carrito
                        </Link>
                    </li>
                </ul>

                {isButtonVisible && (
                    <Link to="/cart" className="cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white"/>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
