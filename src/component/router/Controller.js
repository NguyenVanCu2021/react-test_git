import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from '../content/News'
import Contact from '../content/Contact'
import NewDetail from '../content/NewDetail'
import ControlContent from '../content/ControlContent'
import User from '../user_manage/User'


class Controller extends Component {
    render() {
        return (
                <div>
                {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                */}
                <Switch>
                    <Route path="/tin-tuc/:slug.:id.html"> 
                        <NewDetail />
                    </Route>
                    <Route exact path="/tin-tuc">
                        <News />
                    </Route>
                    <Route exact path="/user-manager">
                        <User />
                    </Route>
                    <Route path="/lien-he">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <ControlContent />
                    </Route>
                </Switch>
                </div>
        );
    }
}

export default Controller;