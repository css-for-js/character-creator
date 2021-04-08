import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="perspectiveShading" />
      <div className="mainContent">
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
