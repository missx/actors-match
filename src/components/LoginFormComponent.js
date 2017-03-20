import React, { Component } from 'react';
import './LoginFormComponent.css';

import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';


function LoginFormComponent(props) {
    
    return props.showForm === false
        ? <div>
            <Button bsStyle="primary" onClick={props.toggleShowForm}>Login</Button>
        </div>
        : <div>
            <Button bsStyle="primary" onClick={props.toggleShowForm}>Login</Button>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
        </div>
    
}

export default LoginFormComponent;
