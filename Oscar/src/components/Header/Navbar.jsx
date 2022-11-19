import Toolbar from '@mui/material/Toolbar';
import React from 'react'
import styled from '@emotion/styled';
import logo from './/Group50.png';

const back = styled(Toolbar)({
    bgcolor: "#1a2c38"

});

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_link">
                <div className="navbar_link_logo">
                    <img id='navlogo' src={logo} alt="Logo" />
                </div>
                <label id='titlelogo'>Logo</label>
                <div className="navbar_link_contain">
                    <p id='home'><a href="#home">Home</a></p>
                    <p id='pricing'><a href="#pricing">Pricing</a></p>
                    <p id='about'><a href="#home">About</a></p>
                </div>
            </div>
            <button id='navbarbutton' type='button'>Connect Wallet</button>
        </div>
    )
}
