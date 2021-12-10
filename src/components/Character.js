import React from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;


h2 {
    color: ${props => props.theme.primaryColor};
}

`


// Write your Character component here
export default function Character({char}) {
    // const [character, setCharacter] = useState('');
    // const [height, setHeight] = useState('');
    // const [gender, setGender] = useState('');

    console.log(`CharacterPage: ${char.name}`)


    return (
        <StyledChar>
            <h2>{char.name}</h2>
            <div>
            <p>More about {char.name}:</p>
            <p>Born Year: {char.birth_year}</p>
            <p>Height: {char.height}</p>
            <p>Hair Color: {char.hair_color}</p>
            <p>Eye Color: {char.eye_color}</p>
            </div>
        </StyledChar>
    )

}