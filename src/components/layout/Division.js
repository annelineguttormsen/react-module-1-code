import React from "react";
import PropTypes from "prop-types";

function Division(props) {

    const answer = props.firstNumber / props.secondNumber;

	return <div>{answer}</div>;
}

Division.propTypes = {
    answer : PropTypes.number.isRequired,
    children : PropTypes.node.isRequired
}

export default Division;
