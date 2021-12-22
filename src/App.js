import './assets/scss/index.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./views/Home/Home";
import {AuthProvider} from "./api/auth"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyAccount from "./views/MyAccount";
import Header from "./core/components/page/Header";
import React from "react";
import Footer from "./core/components/page/Footer"; // requires a loader


function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/my-account" component={MyAccount}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
