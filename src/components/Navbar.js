import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styling from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                
                <Link className="navbar-brand" to="/" alt="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Produkt</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus">Warenkorb</i>
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styling.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite);
        font-size:1.3rem !important;
        text-transform:capitalize;
    }
`;
