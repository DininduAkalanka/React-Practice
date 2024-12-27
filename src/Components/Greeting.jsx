import React from 'react';
import PropTypes from 'prop-types';

export default function Greeting(props) {
    const welcomeMsg = <h2>Welcome {props.name}</h2>;
    const logPrompt = <h2>Please Log In</h2>;

    return (
        <div>
            {props.isLogged ? welcomeMsg : logPrompt}
        </div>
    );
}

// Define propTypes
Greeting.propTypes = {
    isLogged: PropTypes.bool,
    name: PropTypes.string,
};

// Define defaultProps
Greeting.defaultProps = {
    isLogged: false,
    name: 'Guest',
};
