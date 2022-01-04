import './assets/scss/index.scss';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./views/Home/Home";
import useAuth, {AuthProvider} from "./api/auth"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyAccount from "./views/MyAccount";
import Header from "./core/components/page/Header";
import React from "react";
import Footer from "./core/components/page/Footer";
import {ModalProvider} from "./core/context/modalContext";
import LoginPage from "./views/Login/LoginPage";
import RegisterPage from "./views/Login/RegisterPage";
import ForgotPasswordPage from "./views/Login/ForgotPasswordPage";
import EmailConfirmationPage from "./views/EmailConfirmationPage";
import RegisterProfessional from "./views/Professionals/RegisterProfessional";
import ProtectedRoute from "./core/components/routes/ProtectedRoute"; // requires a loader

function App() {
    const {user} = useAuth();

    return (
        <AuthProvider>
            <ModalProvider>
                <div className="App">
                    <BrowserRouter>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/Users/account_verification/email/:userId/:token"
                                   component={EmailConfirmationPage}/>
                            <ProtectedRoute path="/my-account" component={MyAccount}/>
                            <ProtectedRoute preventConnected path="/login" component={LoginPage}/>
                            <ProtectedRoute preventConnected path="/register" component={RegisterPage}/>
                            <ProtectedRoute preventConnected path="/forgot-password" component={ForgotPasswordPage}/>
                            <Route path="/register-professional" component={RegisterProfessional}/>
                            <Redirect to="/"/>
                        </Switch>
                        <Footer/>
                    </BrowserRouter>
                </div>
            </ModalProvider>
        </AuthProvider>
    );
}

export default App;
