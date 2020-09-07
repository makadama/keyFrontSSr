import React, { Component } from 'react';
import './StyleSidebar.css';


class  Sidebar extends Component {
	
  render() {
    return (    
 
   
    <div className="sidebar">
      <div className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <header>keyservice</header>
        <ul>
          <li><a href=""><i className="fas fa-qrcode"></i>Dashboard</a></li>
          <li><a href=""><i className="fas fa-link"></i>Shortcuts</a></li>
          <li><a href=""><i className="fas fa-stream"></i>Overview</a></li>
          <li><a href=""><i className="fas fa-calendar-week"></i>Events</a></li>
          <li><a href=""><i className="fas fa-question-circle"></i>About</a></li>
          <li><a href=""><i className="fas fa-sliders-h"></i>Services</a></li>
          <li><a href=""><i className="fas fa-envelope"></i>Contact</a></li>

        </ul>
    </div>
 

    );
  }
}

export default Sidebar;