import React, { useState } from 'react';

// Write your Character component here
export default function Character({char}) {
    // const [character, setCharacter] = useState('');
    // const [height, setHeight] = useState('');
    // const [gender, setGender] = useState('');

    console.log(`CharacterPage: ${char.name}`)


    return (
        <div>
            <h2>{char.name}</h2>
        </div>
    )

}