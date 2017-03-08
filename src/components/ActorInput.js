var React = require('react');
var PropTypes = React.PropTypes;

import { FormControl } from 'react-bootstrap';

import './ActorInput.css';

function ActorInput (props) {
    
    return (
        <div>
            <FormControl
                onChange={props.onUpdateActor}
                placeholder="Actor's Name"
                type='text'
                value={props.actorsName}
            />
        </div>
    );
}

ActorInput.propTypes = {
    onUpdateActor: PropTypes.func.isRequired,
    actorsName: PropTypes.string.isRequired,
}

module.exports = ActorInput;