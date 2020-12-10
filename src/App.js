import React from 'react';

import Character from './components/Character';
import bodies from './components/Character/bodies';
import {
  skinColors,
  clothesColors,
} from './components/Character/constants';

function App() {
  const [bodyIndex, setBodyIndex] = React.useState(0);
  const [skinColor, setSkinColor] = React.useState(skinColors[0]);
  const [clothesColor, setClothesColor] = React.useState(
    clothesColors[0]
  );

  return (
    <div>
      {bodies.map((_, index) => (
        <button key={index} onClick={() => setBodyIndex(index)}>
          Body {index + 1}
        </button>
      ))}
      <Character
        bodyIndex={bodyIndex}
        skinColor={skinColor}
        clothesColor={clothesColor}
      />
    </div>
  );
}

export default App;
