import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

const myDivStyle = (generateColor) => css`
  background-color: ${generateColor ? generateColor : null};
  border-radius: 15px;
  border: 2px solid white;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 1s;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  text-align: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
  width: 20em;
  height: 20em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0;
  right: 0;
`;

const myButtonStyle = css`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export default function Div() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [generateColor, setGenerateColor] = useState(
    randomColor.randomColor({ hue: hue, luminosity: luminosity }),
  );

  return (
    <>
      <button
        onClick={() =>
          setGenerateColor(
            randomColor.randomColor({ hue: hue, luminosity: luminosity }),
          )
        }
        css={myButtonStyle}
      >
        Generate
      </button>
      <br />
      <br />
      <h2>Otherwise choose the Hue and the Luminosity</h2>
      <h4>and don't forget to click that cute button!</h4>
      <br />
      <label>
        Hue:
        <br />
        <input
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Luminosity:
        <br />
        <input
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <br />
      <div css={myDivStyle(generateColor)}>
        Generated Color: {generateColor}
      </div>
    </>
  );
}
