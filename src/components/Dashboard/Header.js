import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg dashboard">
          <div className="container-fluid">
          <Link className="navbar-brand dashboard" to="/">Exitum</Link>
          <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <img alt="user" src="https://www.facebook.com/profile/pic.php?cuid=AYjGnoKQVKX9qMP_jbk965F2GR5bXyY9VJ5jrsVAIv6W1_sE_BaXiKnYM9oLYC1YDlyIPpijR_gvzlTas35TkPNjIFvRKUC86vscEo6AHkfMYDdqZ_ySp-DbyFYKPJiU8ga9_aIHPKFGKDKxVe2zRlNjAcwY7mLBtU99AeArNz7AeIlXjslYmeVp-6MTGoVsSntqZCFtb-P8tHAax0ZReyjRXoBrwTqPvtZaMlJ1cdbBy9fdl_HppV8T1No1OyYj4403hRlzOova40A6IHuwhcGbvkZ8DnYkKGFlWxtBFRnSzg&square_px=64" />
                <Link>
                    Diego Ortega
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </>
    )
  }
}