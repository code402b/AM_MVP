import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
  AppHeading,
  MediaContainer,
  TextEntry,
  Footer,
} from './component_index.jsx';

export default function NoteApp() {
  const [media, setMedia] = useState({});
  const [inputText, setInputText] = useState('');

  const getNewPoem = () => {
    axios.get('/waltWhitmanPoem')
      .then(res => {
        // console.log('poem res', res.data);
        const poem = {
          title: res.data.title,
          text: res.data.text,
        };
        setMedia(poem);
      })
      .catch(err => console.log(err));

    setMedia({});
  };

  useEffect(() => {
    getNewPoem();
  }, []);

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
        getNewPoem={getNewPoem}
      />
    </>
  );
}
