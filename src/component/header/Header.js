import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            //Header
            <header className="masthead text-center text-white user-header">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                        <h2 className="masthead-subheading mb-5">React JS</h2>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle" />
                <div className="bg-circle-2 bg-circle" />
                <div className="bg-circle-3 bg-circle" />
                <div className="bg-circle-4 bg-circle" />
            </header>
        );
    }
}

export default Header;