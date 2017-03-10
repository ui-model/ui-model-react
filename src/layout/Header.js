import React from 'react';
import logo from './_images/ui-model.png';

import './Header.css';

export default function Header() {
  return <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Logo"/>
          Ui Model Showcase
        </a>
      </div>
    </div>
  </nav>
}