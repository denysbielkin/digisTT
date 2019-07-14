import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import {urls} from '../../common/constants';

export default function Navigation() {
    return (
        <Navbar>
            <Nav className="mr-auto">
                <Nav.Link> <Link to={urls.routes.main}>Main</Link></Nav.Link>
                <Nav.Link> <Link to={urls.routes.about}>About </Link></Nav.Link>
            </Nav>
        </Navbar>

    )
}
