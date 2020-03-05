import React from "react";

function Heading(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</>
	);
}

export default Heading;
