import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  img.Header {
    width: 50%;
    
  }
  margin: 1.5%;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [initialData, setInitialData] = useState([]);
  // const [character, setCharacter] = useState('');


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  useEffect(() => {
    const fetchCharacters = () => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      // console.log(res.data)
      setInitialData(res.data)
      // initialData.map((char, index) => (
      //   <Character char={char} key={index} />
      // ))
      // setCharacter({char})
      
    })
    .catch(err => {
      console.log(err)
    })
  }
  fetchCharacters()
  }, [])


  return (
    <StyledApp className="App">
      <img className="Header" src='https://fontmeme.com/permalink/211210/4f9a8d2a56104d9a70a065d31b072c05.png' alt='character title'/>
      {/* <h1 className="Header">Characters</h1> */}
      <>
          {
            initialData.map((char, index) => (
            <h2 key={index}>{char.name}</h2>
            ))
          }
      </>

    </StyledApp>
  );
}

export default App;


