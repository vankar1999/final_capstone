import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCap from './NavbarCap';
import CurrentPage from './CurrentPage';
import Home from './Home';
import Menu from './Menu';
// import Parks from './Parks';


function App() {
  const [currentPageName, setCurrentPageName] = useState("home")
  const handleHome = () => {setCurrentPageName("home")}
  const handleMenu = () => {setCurrentPageName("menu")}

  let currentPage = null;
  switch(currentPageName){
    case "home": 
      currentPage = <Home/>;
      break;
    case "menu": 
      currentPage = <Menu/>;
      break;
    default: <Home/>;
  }
  return (
    
    <div>
      <NavbarCap  handleHome={handleHome} handleMenu={handleMenu}/> 

        <CurrentPage currentPage={currentPage} />

    </div>
    
 );
}

export default App;
