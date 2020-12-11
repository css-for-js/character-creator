import React from 'react';

import Character from './components/Character';
import {
  numBodies,
  numHeads,
  numFaces,
  numAccessories,
  skinColors,
  clothesColors,
} from './components/Character/constants';

const range = (n) => [...Array(n).keys()];

function App() {
  const [bodyIndex, setBodyIndex] = React.useState(0);
  const [headIndex, setHeadIndex] = React.useState(0);
  const [faceIndex, setFaceIndex] = React.useState(0);
  const [accessoryIndex, setAccessoryIndex] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(skinColors[0]);
  const [clothesColor, setClothesColor] = React.useState(
    clothesColors[0]
  );

  return (
    <div>
      <div>
        {range(numBodies).map((index) => (
          <button key={index} onClick={() => setBodyIndex(index)}>
            Body {index + 1}
          </button>
        ))}
      </div>
      <div>
        {range(numHeads).map((index) => (
          <button key={index} onClick={() => setHeadIndex(index)}>
            Head {index + 1}
          </button>
        ))}
      </div>
      <div>
        {range(numFaces).map((index) => (
          <button key={index} onClick={() => setFaceIndex(index)}>
            Face {index + 1}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => setAccessoryIndex(-1)}>
          No Accessory
        </button>
        {range(numAccessories).map((index) => (
          <button
            key={index}
            onClick={() => setAccessoryIndex(index)}
          >
            Accessory {index + 1}
          </button>
        ))}
      </div>
      <div>
        {clothesColors.map(({ label, color }) => (
          <button
            onClick={() => setClothesColor(color)}
            style={{ backgroundColor: color, width: 50, height: 50 }}
          >
            <span className="visually-hidden">{label}</span>
          </button>
        ))}
      </div>
      <div>
        {skinColors.map(({ label, color }) => (
          <button
            onClick={() => setSkinColor(color)}
            style={{ backgroundColor: color, width: 50, height: 50 }}
          >
            <span className="visually-hidden">{label}</span>
          </button>
        ))}
      </div>
      <Character
        bodyIndex={bodyIndex}
        headIndex={headIndex}
        faceIndex={faceIndex}
        accessoryIndex={accessoryIndex}
        skinColor={skinColor}
        clothesColor={clothesColor}
      />
    </div>
  );
}

export default App;
