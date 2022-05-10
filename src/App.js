import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const Div = styled.div`
  color: 'white';
  background-color: ${(props) => props.bg};
  display: inline;
`;

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <br />
      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>
      <br />
      <br />
      <Div bg={color}>Generated Color: {color}</Div>
      <br />
      <br />
      <div>Hue: {randomColor().hue}</div>
      <input
        value={hue}
        onChange={(event) => setHue(event.currentTarget.value)}
      />
      <Div bg={hue}>Generated Color: {hue}</Div>
      <div>Luminosity:</div>
      <input
        value={luminosity}
        onChange={(event) => setLuminosity(event.currentTarget.value)}
      />
      <Div bg={luminosity}>Generated Color: {luminosity}</Div>
      <br />
    </div>
  );
}

// {randomColor.luminosity('light' || 'dark')
//        ? randomColor.luminosity
//        : "Enter 'light' or 'dark'."}
