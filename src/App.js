import React, { Component } from 'react'; // phải thêm dòng này vào để chạy component
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import TopMenu from './component/topmenu/TopMenu';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
//import LifeCycle from './lifecycle/LifeCycle';
import Controller from './component/router/Controller';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="component-html">
          <TopMenu/>
          <Header/>
          <Controller/>
          <Footer/>
          {/* <LifeCycle/> */}
        </div>
      </Router>
    );
  }
}

export default App;