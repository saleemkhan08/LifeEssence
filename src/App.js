import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import Menu from './components/Menu';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Clinic from './components/Clinic';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
        <Menu />
        <Packages />
        <Clinic />
        <Contact />
        <Footer />
        <SignUpModal />
        <LoginModal />
        <div id="site-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#72bc2c" /></svg></div>
      </div >
    );
  }
}

export default App;
