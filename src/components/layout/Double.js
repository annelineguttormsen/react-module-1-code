import React from "react";

function Double(props) {
	// set the value of the answer variable to be the value of the number prop
	let answer = props.number;

	// if the multiply prop is true, times the answer by 2
	if (props.multiply === true) {
		answer = props.number * 2;
	}

	return <div className="answer">{answer}</div>;
}

export default Double;
