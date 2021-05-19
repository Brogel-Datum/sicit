import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

import $ from 'jquery';

export default function LeftSide() {
    const functionClose = () => {
        $('#sidebar, #content').toggleClass('active');
    }
    return (
        <Style>
            <div className="vertical-nav active" id="sidebar">
                <div className="d-flex justify-content-end mt-2">
                    <button id="sidebarCollapse" onClick={() => functionClose()} type="button"
                        className="btn btn-light bg-white rounded-pill shadow-sm">
                        <i className="fa fa-close mr-2"></i>
                    </button>
                </div>
                <div className="pb-4 px-3 mb-4 bg-white">
                    <div className="media d-flex align-items-center">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiFCGEIeATUH783BEPDq_KJNlI0jF7PWkXfoUKq" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                        <div className="media-body">
                            <h5 className="m-0">Mikel Escobar</h5>
                            <p className="font-weight-light text-muted mb-0">Arquitecto de software</p>
                        </div>
                    </div>
                </div>
                <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Menú</p>
                <ul className="nav flex-column mb-0">
                    <li className="nav-item">
                        <Link to="/dashboard" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-th-large mr-3 fa-fw"></i>
                            <div>Panel principal</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projections" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-money mr-3 fa-fw"></i>
                            <div>Proyección de la recaudación</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bankClosure" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-university mr-3 fa-fw"></i>
                            <div>Cierre de bancos</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/treasury" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-address-card mr-3 fa-fw"></i>
                            <div>
                            Resumen de recaudaciones
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/income" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-calendar-o mr-3 fa-fw"></i>
                            <div>Tendencia de ingresos</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/maintenance" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-plus-square-o mr-3 fa-fw"></i>
                            <div>Mantenimiento</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/collectors" onClick={() => functionClose()}
                        className="nav-link text-dark d-flex align-items-center">
                            <i className="fa fa-plus-square-o mr-3 fa-fw"></i>
                            <div>Mantenimiento de recaudadores</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </Style>
    );
}

const Style = style.div`
.vertical-nav {
    z-index: 1031;
    min-width: 17rem;
    width: 17rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    font-family: var(--poppins);
    transition: all 0.4s;
    background-color: var(--white);
    overflow-y: auto; 
}

.page-content {
    width: calc(100% - 17rem);
    margin-left: 17rem;
    transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
    margin-left: -17rem;
}

#content.active {
    width: 100%;
    margin: 0;
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -17rem;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #content {
        width: 100%;
        margin: 0;
    }
    #content.active {
        margin-left: 17rem;
        width: calc(100% - 17rem);
    }
}

body {
    background: #599fd9;
    background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
    background: linear-gradient(to right, #599fd9, #c2e59c);
    min-height: 100vh;
    overflow-x: hidden;
}

.separator {
    margin: 3rem 0;
    border-bottom: 1px dashed #fff;
}

.text-uppercase {
    letter-spacing: 0.1em;
}

.text-gray {
    color: #aaa;
}
`;
