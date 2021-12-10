import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;



h2 {
    color: ${props => props.theme.primaryColor};
    font-family: 'Didact Gothic', sans-serif;
    font-size: 2.5rem;
}
.charInfo {
    width: 40%;
    border: 3px solid ${props => props.theme.secondaryColor};
}

p {
    font-family: 'Didact Gothic', sans-serif;
    padding-left: 3%;
}

`


// Write your Character component here
export default function Character({char}) {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('')
    const [height, setHeight] = useState('')
    const [hair, setHair] = useState('')
    const [eye, setEye] = useState('')
    const [infoOn, setInfoOn] = useState(false)

    const toggleInfo = () => {
        setInfoOn(!infoOn);
    }

    useEffect(() => {
        setName(char.name)
        setBirth(char.birth_year)
        setHeight(char.height)
        setHair(char.hair_color)
        setEye(char.eye_color)
    }, [])



    return (
        <StyledChar>
            <h2>{name}</h2>
            <button id='toggleInfo' onClick={toggleInfo}>{infoOn ? `Hide Info` : `Learn more about ${name}`}</button>

            {
            infoOn && <div className='charInfo'>
                
                <p className='charDesc'>Born Year: {birth}</p>
                <p className='charDesc'>Height: {height}</p>
                <p className='charDesc'>Hair Color: {hair}</p>
                <p className='charDesc'>Eye Color: {eye}</p>
            </div>
            }

        </StyledChar>
    )

}