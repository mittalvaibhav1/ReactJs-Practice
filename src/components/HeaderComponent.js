import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,Collapse,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                    </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
export default Header;