import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  AppHeading,
  MediaContainer,
  TextEntry,
  Footer,
} from './component_index.jsx';

import { LogoutButton } from './Userfront.js';

import { FlexContainer } from './Styles/styles_index.js';

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
          type: 'text',
        };
        setMedia(poem);
      })
      .catch(err => console.log(err));

    setMedia({});
  };

  const getNewImage = () => {
    axios.get('/metAPIObject')
      .then(res => {
        // console.log('image res', res.data);
        const image = {
          title: res.data.title,
          culture: res.data.culture,
          period: res.data.period,
          URL: res.data.primaryImage,
          smallURL: res.data.primaryImageSmall,
          type: 'image',
        };
        image.smallURL === '' ? setMedia(image) : getNewImage();
      })
      .catch(err => console.log(err));
  };

  // useEffect(() => {
  //   getNewImage();
  // }, []);

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
