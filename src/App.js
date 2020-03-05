import React from "react";
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import "./sass/style.scss";

function App() {
	return (
		<Layout>
			<Heading title="Title from prop" subtitle="Subtitle from prop" />

			<Paragraph>This will be the children prop inside the component.</Paragraph>
		</Layout>
	);
}

export default App;
