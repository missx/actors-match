import React, { Component } from 'react';

import LoginFormComponent from '../components/LoginFormComponent';

class LoginRegisterComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false,
            showRegisterForm: false
        };
        this.handleToggleLoginForm = this.handleToggleLoginForm.bind(this);
    }
    
    handleToggleLoginForm() {
        console.log('here');
        this.setState({
           showLoginForm: !this.state.showLoginForm 
        });
    }
    
    handleToggleRegisterForm() {
        this.setState({
           showRegisterForm: !this.state.showRegisterForm 
        });
    }
    
    render() {
        return (
            <LoginFormComponent toggleShowForm={this.handleToggleLoginForm} showForm={this.state.showLoginForm}/>
        );
    }
}

export default LoginRegisterComponent;
