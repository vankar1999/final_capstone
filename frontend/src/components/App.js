import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCap from './NavbarCap';
import CurrentPage from './CurrentPage';
import Home from './Home';
// import Mountains from './Mountains';
// import Parks from './Parks';


function App() {
  const [currentPageName, setCurrentPageName] = useState("home")
  const handleHome = () => {setCurrentPageName("home")}

  let currentPage = null;
  switch(currentPageName){
    case "home": 
      currentPage = <Home/>;
      break;
    //placeholder for other pages
    default: <Home/>;
  }
  return (
    
    <div>
      <NavbarCap  handleHome={handleHome} /> 
      <div>
        <CurrentPage currentPage={currentPage} />
      </div>
    </div>
    
 );
}

export default App;
