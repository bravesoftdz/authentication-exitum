import React from 'react';
import capsule from '../image/icons/capsule.svg'
import rectangle from '../image/icons/rectangle.svg'
import square from '../image/icons/square.svg'
import circle from '../image/icons/circle.svg'
import rectangleSmall from '../image/icons/rectangle-small.svg'
import squareSmall from '../image/icons/square-small.svg'
import circleSmall from '../image/icons/circle-small.svg'
import { withRouter } from 'react-router-dom'
import SignUp from './SignUp';

const Banner = (props) => {

    return (
        <>

            <span className="item rectangle-1"><img src={rectangle} /></span>
            <span className="item square-1"><img src={square} /></span>
            <span className="item circle-1"><img src={circle} /></span>
            <span className="item rectangle-2"><img src={rectangleSmall} /></span>
            <span className="item square-2"><img src={squareSmall} /></span>
            <span className="item circle-2"><img src={circleSmall} /></span>
            <span className="item rectangle-3"><img src={rectangleSmall} /></span>
            <span className="item square-3"><img src={squareSmall} /></span>
            <span className="item circle-3"><img src={circleSmall} /></span>
            <div className="banner">
                <div className="container-ex">
                    <div className="container-banner row">
                        <div className="info-banner col-md-6">
                            <h3>sueño</h3>
                            <h2>Tu <span>proyecto</span><br />
                                en nuestras manos</h2>
                            <div className="btn-register">
                                <button type="button" className="btn-signup" data-toggle="modal" data-target="#signup">
                                    Registrarme
                                </button>
                            </div>
                        </div>
                        <div className="img-banner col-md-6">
                            <img className="capsule" src={capsule} alt="banner principal" />
                        </div>
                    </div>
                </div>
            </div>

            <SignUp />
        </>
    );
}

export default withRouter(Banner);