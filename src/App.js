import './App.js';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Div from './Div.js';

const mainStyles = css`
  min-height: 100vh;
  padding-top: 20px;
`;

export default function App() {
  return (
    <div className="App" css={mainStyles}>
      <h4>A modest version of</h4>
      <h1>Random Color Generator</h1>
      <br />
      <h2>Click the cute button to generate a random color</h2>
      <Div />
      <br />
      <br />
    </div>
  );
}
