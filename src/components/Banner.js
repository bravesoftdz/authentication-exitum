import React from 'react';
import banner from '../image/banner.png'
import { withRouter } from 'react-router-dom'
import SignUp from './SignUp';

const Banner = (props) => {

    return (
        <>
            <div className="banner">
                <div className="container-ex">
                    <div className="container-banner row">
                        <div className="img-banner col-md-6">
                            <img src={banner} alt="banner principal" />
                        </div>
                        <div className="info-banner col-md-6">
                            <h2>Emprende e impulsa todo tipo de proyectos, en exitum tenemos las mejores posibilidades para un gran futuro.
                            <br/>
                            <span>Atrevete a salir adelante</span></h2>
                            
                            <div className="btn-register">
                                <button type="button" className="btn-signup" data-toggle="modal" data-target="#signup">
                                    Registrate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SignUp />
        </>
    );
}

export default withRouter(Banner);