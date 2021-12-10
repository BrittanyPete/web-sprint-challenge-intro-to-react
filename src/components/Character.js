import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const StyledChar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Didact Gothic', sans-serif;


h2 {
    color: ${props => props.theme.primaryColor};
    font-size: 2.5rem;
  }

.charInfo {
    width: 100%;
    margin: 2%;
    border: 3px solid ${props => props.theme.secondaryColor};
}

p {
    padding-left: 3%;
}

button {
    background-color: grey;
    color: white;
    padding: 2%;
  }

`


// Write your Character component here
export default function Character({char, index}) {
    const [character, setCharacter] = useState('')
    const [birth, setBirth] = useState('')
    const [height, setHeight] = useState('')
    const [hair, setHair] = useState('')
    const [eye, setEye] = useState('')
    const [infoOn, setInfoOn] = useState(true);

    const toggleInfo = () => {
      setInfoOn(!infoOn)
    }
   

    useEffect(() => {
        setCharacter(char.name)
        setBirth(char.birth_year)
        setHeight(char.height)
        setHair(char.hair_color)
        setEye(char.eye_color)
    }, [])



    return (
        <StyledChar>
            <h2>{character}</h2>
            <button id='toggleInfo' onClick={toggleInfo}>More Info:</button>
            {
                infoOn && <div className='charInfo'>
                <p>Birth Year: {birth}</p>
                <p>Height: {height}</p>
                <p>Hair Color: {hair}</p>
                <p>Eye Color: {eye}</p>
            </div>
            }

        </StyledChar>
    )

}