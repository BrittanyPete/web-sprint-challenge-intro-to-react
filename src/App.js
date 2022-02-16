import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Didact Gothic", sans-serif;

  img.Header {
    width: 50%;
  }
  margin: 1.5%;

  @media (max-width: 768px) {
    img.Header {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const App = () => {

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const fetchCharacters = () => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setInitialData(res.data)      
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

    <div>
      {
        initialData.map((char, index) => (
          <Character char={char} key={index} />
        ))
      }
    </div>

    
    </StyledApp>
  );
}

export default App;


