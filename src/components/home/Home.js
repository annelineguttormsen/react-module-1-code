import React from 'react';
import Heading from "../layout/Heading";
import CharacterList from "../characters/list/CharacterList";

export function Home() {
    return (
        <>
        <Heading title="Home" />
        <CharacterList />
        </>
    );
}

export default Home;

