import React, {useState, useEffect} from 'react';
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
    const [name, setName] = useState('');

    useEffect(() => {
        setName(char.name)
    }, [])

 


    return (
        <StyledChar>
            <h2>{name}</h2>
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