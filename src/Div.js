/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const randomHexColor = () => {
  // Generate a random 2 digit hex number, padded with a 0 if necessary
  const part = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
  const r = part();
  const g = part();
  const b = part();
  return `#${r}${g}${b}`;
};

const myDivStyles = (color) => css`
  background-color: ${color ? color : null};
`;

export default function Div() {
  const [color, setColor] = useState('');
  return (
    <div>
      <div css={myDivStyles(color)}>Generated color: {color}</div>
      <button onClick={() => setColor(randomHexColor())}>Generate</button>
    </div>
  );
}
