import React, { useState } from 'react';

import {
  AppHeading,
  MediaContainer,
  TextEntry,
  Footer,
} from './component_index.jsx';

export default function NoteApp() {
  const [media, setMedia] = useState({});
  const [inputText, setInputText] = useState('');
  return (
    <>
      <AppHeading />
      <MediaContainer
        media={media}
      />
      <TextEntry
        inputText={inputText}
        setInputText={setInputText}
      />
      <Footer
        setMedia={setMedia}
      />
    </>
  );
}
