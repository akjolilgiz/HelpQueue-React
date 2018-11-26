import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <h3>{props.location}</h3>
      <h2>{props.names}</h2>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
