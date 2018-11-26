import React from 'react';
import Proptypes from 'prop-types';

const ConfirmationQuestions = (props) => {
 return (   <div>
    <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
    <button onClick = {props.onTroubleshootingConfirmation}>Yes</button>
  </div> );
}
ConfirmationQuestions.propTypes = {
    onTroubleshootingConfirmation: Proptypes.func
};
 
export default ConfirmationQuestions;