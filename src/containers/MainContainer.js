import React, { Component } from 'react';
import './MainContainer.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';

import LoginRegisterContainer from './LoginRegisterContainer';

class MainContainer extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
        }
        
       
   
    }
   

    render() {
        
        
        return (
            <div className="App">
            <div className="App-header">
              <h2>Actors' Match</h2>
            </div>
            <div className="SectionsPadding">
                <LoginRegisterContainer/>
            </div>
            </div>
        );
    }

}

export default MainContainer;
