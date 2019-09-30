import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SignIn from './SignIn';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-exlg">
          <Link className="navbar-brand" to="/">Exitum</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" data-toggle="modal" data-target="#signin">
                Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

        <SignIn />
      </>
    )
  }
}