import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import $ from 'jquery';

// import logo from '../../assets/images/logo-sefin.png';
import LeftSide from '../leftSide/LeftSide';

export default function Navbar() {
    const handleClick = () => {
        $('#sidebar, #content').toggleClass('active');
    }
    // const boxData = ['sidebar', 'navbar']
    // window.addEventListener('mouseup', function (event) {
    //     for (let index = 0; index < boxData.length; index++) {
    //         let box = document.getElementById(boxData[index]);
    //         if (event.target !== box && event.target.parentNode !== box) {
    //             $("#sidebar").addClass("active");
    //         }
    //     }
    // })
    return (
        <Style>
            <LeftSide/>
            <nav className="navbar navbar-expand-lg fixed-top row" id="navbar">
                <div className="px-4 col d-flex col justify-content-start">
                    <button id="sidebarCollapse" onClick={() => handleClick()} type="button"
                        className="btn btn-color">
                        <i className="fa fa-bars mr-2"></i>
                    </button>
                </div>
                <div className="navbar-brand d-flex col justify-content-end" id="navbarCollapse">
                    <Link className="navbar-brand" to="/projections">
                        <img src="https://i.ibb.co/j9Cdhmy/Logo-SEFIN-07-05-2021.jpg" alt="menu_logo" className="logo-responsive" />
                    </Link>
                </div>
            </nav>
        </Style>
    );
}

const Style = style.div`
.navbar {
    // background-color: var(--white);
}
.reports{
    text-transform: uppercase;
}
.nav-item {
    padding: 0 10px;
}
a {
    color: var(--icon-gray) !important;
}
h1 {
    text-transform: uppercase;
}
#sidebarCollapse {
    border: none;
    background-color: var(--body-gray);
    box-shadow: none !important;
}
.logo-responsive {
    height: 85px;
    border-radius: 25px;
}
@media(max-width: 500px) {
    .logo-responsive {
        height: 55px;
    }
}
`;
