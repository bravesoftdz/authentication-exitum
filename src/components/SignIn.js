import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'
import {connect} from 'react-redux'
import {compose} from 'redux'
import * as actions from '../actions/index'

class SignUp extends Component {

    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData){
        console.log('onSubmit() is called')
        console.log('form data', formData)
        await this.props.signIn(formData);
        this.props.history.push('/');
    }

    render() {

        const {handleSubmit} = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 pt-5">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
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
                            <button className="btn btn-success">Facebook</button>
                            <button className="btn btn-danger">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default compose(
    connect(null,actions),
    reduxForm({form: 'formSignin'})
)(SignUp)

