import React from "react";
import PropTypes from "prop-types";

function Division(props) {

    const answer = props.firstNumber / props.secondNumber

	return <div>{answer}</div>;
}

Division.propTypes = {
    firstNumber: PropTypes.number.isRequired,
    secondNumber: PropTypes.number.isRequired
};

export default Division;
