import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const Div = styled.div`
  background-color: ${(props) => props.bg};
  display: inline;
`;

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      Random Color Generator
      <br />
      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>
      <br />
      <br />
      <Div bg={color}>Generated Color: {color}</Div>
    </div>
  );
}
