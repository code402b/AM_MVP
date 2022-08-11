import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Userfront from '@userfront/core';

import {
  AppHeading,
  MediaContainer,
  TextEntry,
  Footer,
} from './component_index.jsx';
import { LogoutButton } from './Userfront.js';
import { FlexContainer } from './Styles/styles_index.js';

Userfront.init('6nz4ydmn');

export default function NoteApp() {
  const [media, setMedia] = useState({});
  const [metIDs, setMetIDs] = useState([]);
  const [inputText, setInputText] = useState('');

  const postNote = () => {
    const userId = Userfront.user.userId;
    const username = Userfront.user.name;
    axios.post('/notes', {
      text: inputText,
      media: media,
    });
  };

  const getNewPoem = () => {
    axios.get('/waltWhitmanPoem')
      .then(res => {
        // console.log('poem res', res.data);
        const poem = {
          title: res.data.title,
          text: res.data.text,
          type: 'text',
        };
        setMedia(poem);
      })
      .catch(err => console.log(err));

    setMedia({});
  };

  const getNewImage = (id) => {
    axios.get('/metAPIObject', { body: { id } })
      .then(res => {
        const image = {
          title: res.data.title,
          culture: res.data.culture,
          period: res.data.period,
          URL: res.data.primaryImage,
          smallURL: res.data.primaryImageSmall,
          type: 'image',
        };
        setMedia(image);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get('/metAPIQuery')
      .then(res => {
        console.log('metIDs', res.data);
        setMetIDs(res.data);
      });
  }, []);

  return (
    <MainFlexContainer>
      <HeaderFlexContainer>
        <AppHeading />
        <LogoutButton />
      </HeaderFlexContainer>
      <MediaContainer
        media={media}
      />
      <TextEntry
        inputText={inputText}
        setInputText={setInputText}
      />
      <Footer
        getNewPoem={getNewPoem}
        getNewImage={getNewImage}
        metIDs={metIDs}
      />
    </MainFlexContainer>
  );
}

const MainFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderFlexContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
