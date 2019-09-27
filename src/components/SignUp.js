import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions/index'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.responseGoggle = this.responseGoggle.bind(this)
    }

    async onSubmit(formData) {
        console.log('onSubmit() is called')
        console.log('form data', formData)
        await this.props.signUp(formData);
    }

    async responseGoggle(res) {
        console.log('responseGoggle',res);
        console.log('typeof res', typeof res)
        await this.props.oauthGoogle(res.accessToken)
    } 

    responseFacebook(res) {
        console.log('res',res)
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 pt-5">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="name"
                                    type="text"
                                    id="name"
                                    component={CustomInput}
                                    placeholder="Name"
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="lastname"
                                    type="text"
                                    id="lastname"
                                    component={CustomInput}
                                    placeholder="Last Name"
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="country_id"
                                    type="text"
                                    id="country"
                                    component={CustomInput}
                                    placeholder="Country"
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="role"
                                    type="text"
                                    id="role"
                                    component={CustomInput}
                                    placeholder="Employee"
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="email"
                                    type="email"
                                    id="email"
                                    component={CustomInput}
                                    placeholder="Email"
                                />
                            </fieldset>
                            <fieldset>
                                <Field
                                    className="form-group"
                                    name="password"
                                    type="password"
                                    id="password"
                                    component={CustomInput}
                                    placeholder="Password"
                                />
                            </fieldset>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    <div className="col-md-4 pt-5">
                        <div className="alert alert-primary">
                            Using services
                        </div>
                        <div className="d-flex justify-content-between">
                            <FacebookLogin
                                appId="3455346694483008"
                                autoLoad={false}
                                textButton="Facebook"
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="btn btn-outline-primary"
                            />
                            <GoogleLogin
                                clientId="700642697607-67d5v2cokbnfue09v44061sj3iq6cr6d.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={this.responseGoggle}
                                onFailure={this.responseGoogle}
                                className="btn btn-outline-danger"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'formSignup' })
)(SignUp)

