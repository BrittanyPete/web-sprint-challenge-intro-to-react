import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';


const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledChar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Didact Gothic', sans-serif;


h2 {
    font-family: 'Dela Gothic One', cursive;
    color: ${props => props.theme.primaryColor};
    font-size: 2rem;
  }

.charInfo {
    width: 100%;
    margin: 2%;
    border: 3px solid ${props => props.theme.secondaryColor};
    transform: scale(2); 
    opacity: 0; 
    animation: ${kf} 0.5s ease-in-out forwards;
}

p {
    padding-left: 3%;
}

button {
    font-family: 'Geo', sans-serif;
    background-color: black;
    font-size: 1.4rem;
    color: white;
    padding: 2%;
    border-radius: 50%;
  }
button:hover {
    transform: scale(1.3);
}


@media (max-width: 768px) {
  h2 {
    font-size: 1.7rem;
  }
  button {
    font-size: 1.2rem;
  }
  .charInfo {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }
}

`


// Write your Character component here
export default function Character({char, index}) {
    const [character, setCharacter] = useState('')
    const [birth, setBirth] = useState('')
    const [height, setHeight] = useState('')
    const [hair, setHair] = useState('')
    const [eye, setEye] = useState('')
    const [gender, setGender] = useState('')
    const [infoOn, setInfoOn] = useState(false);

    const toggleInfo = () => {
      setInfoOn(!infoOn)
    }
   

    useEffect(() => {
        setCharacter(char.name)
        setBirth(char.birth_year)
        setHeight(char.height)
        setHair(char.hair_color)
        setEye(char.eye_color)
        setGender(char.gender)
    }, [])



    return (
        <StyledChar>
            <h2>{character}</h2>
            <button id='toggleInfo' onClick={toggleInfo}>
                {infoOn ? 'Hide Info' : 'Read Info'}
            </button>
            {
                infoOn && <div className='charInfo'>
                <p>Birth Year: {birth}</p>
                <p>Height: {height}</p>
                <p>Hair Color: {hair}</p>
                <p>Eye Color: {eye}</p>
                <p>Gender: {gender}</p>
            </div>
            }

        </StyledChar>
    )

}