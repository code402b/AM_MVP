import { createRoot } from 'react-dom/client';
import React from 'react';

import { MediaContainer, TextEntry, Footer } from './components/index.jsx';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <>
      <MediaContainer />
      <TextEntry />
      <Footer />
    </>
  );
}

root.render(<App />);
