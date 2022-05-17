import React from 'react'
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Footer/Footer';

function Routing() {
    return (
        <div>
            <Router>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/profile_page">
                    <Profile />
                    <Footer />
                </Route>
            </Router>
        </div>
    );
}
export default Routing;
