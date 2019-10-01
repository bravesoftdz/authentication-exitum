import React, { Component } from 'react';
import Rocket from '../icons/Rocket';
import Add from '../icons/Ad';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="wrapper-sidebar">
                <ul class="nav nav-pills d-block" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                            <div className="option-exitum">
                                <Rocket />
                                <p>Proyectos</p>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <div className="option-exitum">
                                <Add />
                                <p>Anuncios</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}