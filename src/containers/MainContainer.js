import React, { Component } from 'react';
import './MainContainer.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';

import ActorInput from '../components/ActorInput';

import Movies from '../helpers/movies';

class MainContainer extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            firstActor: '',
            secondActor: '',
            movies: [],
            error: ''
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
            
        if (this.state.firstActor && this.state.secondActor) {
            Movies.getMovies(this.state.firstActor, this.state.secondActor)
            .then(function(results) {
                
                console.log('movies', results);
                this.setState({
                    movies: results
                });
            }).catch(function(err) {
                this.setState({
                    error: err 
                });
            });
        } else {
            this.setState({
                error: 'One or both of the actors\'s names are missing.'
            });
        }
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
