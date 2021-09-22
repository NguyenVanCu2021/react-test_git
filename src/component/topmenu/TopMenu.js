// gõ rcc để lấy phần khung component
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class TopMenu extends Component {
    render() {
        return (
            //<!-- Navigation-->
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <div>
                    <img
                        className="user-avarta rounded-circle"
                        src="assets/img/avarta.png"
                        alt="avarta"
                    />
                    <Link className="navbar-brand" to="/">
                        Luu Duong
                    </Link>
                    </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/tin-tuc">
                                Tin tức
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user-manager">
                                user
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lien-he">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        );
    }
}

export default TopMenu;