import React, { useState } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Navi() {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle);
    }

    return (
        <div className="nav-wrapper">
            <Navbar className="navi" color="light" light expand="md">
                <NavLink href="https://github.com/jdb443/googlebooks" target="_blank" className="navbar-brand">GoogleBooks Search</NavLink>
                <NavbarToggler onClick={toggler} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link" onClick={toggler}>Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/saved" className="nav-link" onClick={toggler}>Saved</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Navi;
