import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCap from './NavbarCap';
import CurrentPage from './CurrentPage';
import Home from './Home';
import Menu from './Menu';
import Login from './Login';
// import Parks from './Parks';


function App() {
  const [currentPageName, setCurrentPageName] = useState("home")
  const handleHome = () => {setCurrentPageName("home")}
  const handleMenu = () => {setCurrentPageName("menu")}
  const handleLogin = () => {setCurrentPageName("login")}

  let currentPage = null;
  switch(currentPageName){
    case "home": 
      currentPage = <Home/>;
      break;
    case "menu": 
      currentPage = <Menu/>;
      break;
    case "login": 
      currentPage = <Login/>;
      break;
    default: <Login/>;
  }
  return (
    
    <div>
      <NavbarCap  handleHome={handleHome} handleMenu={handleMenu} handleLogin={handleLogin}/> 

        <CurrentPage currentPage={currentPage} />

    </div>
    
 );
}

export default App;
