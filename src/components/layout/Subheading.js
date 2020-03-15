import React from "react";
import PropTypes from "prop-types";

function Subheading({ heading }) {
	return (
		<h3>{heading}</h3>
	);
}

Subheading.propTypes = {
	heading: PropTypes.string.isRequired
};

export default Subheading;
