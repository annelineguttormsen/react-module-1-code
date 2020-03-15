import React from "react";
import Heading from "../layout/Heading";
import CharacterList from "../characters/CharacterList";

export function Home() {
	return (
		<>
			<Heading title="Rick and Morty" />
			<CharacterList />
		</>
	);
}

export default Home;
