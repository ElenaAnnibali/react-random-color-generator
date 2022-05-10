/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

export default function Div() {
  return (
    <div>
      <label>
        Hue:
        <input />
      </label>
      <br />
      <label>
        Luminosity:
        <input />
      </label>
    </div>
  );
}
