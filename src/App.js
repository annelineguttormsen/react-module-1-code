import React from "react";
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import Double from "./components/layout/Double";
import "./sass/style.scss";

function App() {
	return (
		<Layout>
			<Heading title="Title from prop" subtitle="Subtitle from prop" />

			<Double number={3} multiply={true} />

			<Paragraph>This will be the children prop inside the component.</Paragraph>
		</Layout>
	);
}

export default App;
