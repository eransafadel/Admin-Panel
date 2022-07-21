import React from "react";
import Topbar from './components/topbar/Topbar';
import MySidebar from "./components/sidebar/MySidebar";
import "./app.css";


function App() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <MySidebar/>
      <div className="others">
      other pages
      </div>
     
    </div>
   </div>
  );
}

export default App;
