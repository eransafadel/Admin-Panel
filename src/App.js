import React from "react";
import Topbar from './components/topbar/Topbar';
import MySidebar from "./components/sidebar/MySidebar";
import Home from "./pages/home/Home";
import "./app.css";


function App() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <MySidebar/>
      <Home/>
     
    </div>
   </div>
  );
}

export default App;
