import './App.css';
import Div from './Div.js';
import HueLuminosity from './HueLuminosity.js';

export default function App() {
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <br />
      <br />
      <Div />
      <br />
      <br />
      <h2>Choose the Hue and the Luminosity</h2>
      <HueLuminosity />
      <br />
      <br />
      <br />
    </div>
  );
}
