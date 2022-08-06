import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import BackgroundSpacer from './components/BackgroundSpacer';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <>
      <AppWrapper>
        <BackgroundSpacer />
        <CharacterEditor />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
