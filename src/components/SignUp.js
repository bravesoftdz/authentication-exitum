import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions/index'
import { withRouter } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import $ from 'jquery'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.responseGoggle = this.responseGoggle.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    async onSubmit(formData) {
        console.log('onSubmit() is called')
        console.log('form data', formData)
        await this.props.signUp(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard')
            $('body').removeClass('modal-open');
            $('body').removeClass('modal-content');
            $('.modal-backdrop').remove();
        }
    }

    async responseGoggle(res) {
        console.log('responseGoggle', res);
        console.log('typeof res', typeof res)
        await this.props.oauthGoogle(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/dashboard');
            $('.modal-backdrop').remove();
        }
    }

    async responseFacebook(res) {
        console.log('responseFacebook', res);
        console.log('typeof res', typeof res)
        await this.props.oauthFacebook(res.accessToken)
        if (!this.props.errorMessage) {
            this.props.history.push('/');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-12 pt-4 info-signup">
                                <div className="welcome-ex">
                                    <span>Bienvenidos a</span>
                                    <h2>Exitum</h2>
                                </div>
                                    <form onSubmit={handleSubmit(this.onSubmit)}>
                                        <fieldset>
                                            <Field
                                                name="name"
                                                type="text"
                                                id="name"
                                                component={CustomInput}
                                                placeholder="Nombre"
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <Field
                                                name="lastname"
                                                type="text"
                                                id="lastname"
                                                component={CustomInput}
                                                placeholder="Apellido"
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <Field
                                                name="country_id"
                                                type="text"
                                                id="country"
                                                component={CustomInput}
                                                placeholder="Pais"
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <Field
                                                name="role"
                                                type="text"
                                                id="role"
                                                component={CustomInput}
                                                placeholder="Tipo de exito"
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <Field
                                                className="form-group"
                                                name="email"
                                                type="email"
                                                component={CustomInput}
                                                placeholder="Email"
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <Field
                                                name="password"
                                                type="password"
                                                component={CustomInput}
                                                placeholder="Contraseña"
                                            />
                                        </fieldset>
                                        
                                        <div className="send-submit">
                                        <button type="submit" className="submit-signup">Registrarse</button>
                                        </div>
                                    </form>
                                    <div className="border-space">
                                    <hr/>
                                    <div className="to">
                                        <p>Tambien puedes registrarte con estas redes sociales </p>
                                    </div>
                                    </div>
                                    <div className="d-flex justify-content-center socials">
                                        <FacebookLogin
                                            appId="2591522130911268"
                                            textButton=""
                                            fields="name,email,picture"
                                            callback={this.responseFacebook}
                                            cssClass="fab fa-facebook-f"
                                        />
                                        <GoogleLogin
                                            clientId="700642697607-67d5v2cokbnfue09v44061sj3iq6cr6d.apps.googleusercontent.com"
                                            buttonText=""
                                            onSuccess={this.responseGoggle}
                                            onFailure={this.responseGoogle}
                                            className="google"
                                        />
                                </div>
                                </div>
                                <div className="col-md-0 bg-register">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(compose(
    connect(null, actions),
    reduxForm({ form: 'formSignin' })
)(SignUp))

