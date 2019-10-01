import React, {Component} from 'react';
import Header from './Header'
import Sidebar from './Sidebar';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
              <Header />
              <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 main-wrapper">
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        <h1>Panel de contenedor</h1>
                        
                    </div>
                </div>  
              </div>
            </div>
        )
    }
}