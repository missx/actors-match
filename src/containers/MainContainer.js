import React, { Component } from 'react';
import './MainContainer.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';

import ActorInput from '../components/ActorInput';

class MainContainer extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            firstActor: '',
            secondActor: '',
            movies: []
        }
        
        this.handleUpdateFirstActor = this.handleUpdateFirstActor.bind(this);
        this.handleUpdateSecondActor = this.handleUpdateSecondActor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
    }
    
    handleUpdateFirstActor(e) {
        this.setState({
            firstActor: e.target.value
        });
    }

    handleUpdateSecondActor(e) {
        this.setState({
            secondActor: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        this.setState({
            movies: [1, 2]
        })
    }

    render() {
        let movies = null;
        if (this.state.movies.length > 0) {
            movies = (
                <Grid>
                    <Row className="show-grid">
                        {
                            this.state.movies.map((movie, index) => 
                                (
                                    <Col xs={12} md={4} lg={3} key={index}>
                                        movie
                                    </Col>
                                )
                            )
                        }
                    </Row>
                </Grid>
            );
        }
        
        return (
            <div className="App">
            <div className="App-header">
              <h2>Actors' Match</h2>
            </div>
            <div className="SectionsPadding">
                <h4 className="App-intro">
                    Find out which actors worked together!
                </h4>
                <div>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6} lg={6}>
                                <ActorInput onUpdateActor={this.handleUpdateFirstActor} actorsName={this.state.firstActor}/>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <ActorInput onUpdateActor={this.handleUpdateSecondActor} actorsName={this.state.secondActor}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="SectionsPadding">
                    <Button bsStyle="info" onClick={this.handleSubmit} >Find!</Button>
                </div>
                <div>
                    {movies}
                </div>
            </div>
            </div>
        );
    }

}

export default MainContainer;
