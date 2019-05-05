import React, { Component } from 'react';
import './App.css';
import Navbar from './components/home/Navbar';
import Banner from './components/home/Banner';
import About from './components/home/About';
import SignUpModal from './components/users/SignUpModal';
import LoginModal from './components/users/LoginModal';
import Menu from './components/home/Menu';
import Packages from './components/home/Packages';
import Contact from './components/home/Contact';
import Clinic from './components/home/Clinic';
import Footer from './components/Footer';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loginUser, logoutUser } from "./components/users/UserActions";
import { auth } from "./store"
import Accounts from './components/account/Accounts';
import ForgotPassword from './components/users/ForgotPassword';
import Dashboard from './components/account/Dashboard';
class App extends Component {
  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      console.log("onAuthStateChanged")
      console.log(user)
      if (user) {
        this.props.dispatch(loginUser(user))
      } else {
        this.props.dispatch(logoutUser())
      }
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={this.staticPages} />
            <Route path="/account/:id" component={Accounts} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <div id="site-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
              <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
              <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#72bc2c" />
            </svg>
          </div>
          <div class="scrollUpBtn"><span class="icon-chevron-up"></span></div>

        </div>
      </BrowserRouter>
    )
  }
  staticPages = () => {
    return (
      <div id="home-page">
        <Navbar />
        <Banner />
        <About />
        <Menu />
        <Packages />
        <Clinic />
        <Contact />
        <SignUpModal />
        <LoginModal />
        <ForgotPassword />
        <Footer />
      </div >);
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.UserReducer
  };
};

export default connect(mapStateToProps)(App);
