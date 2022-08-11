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
  const [notes, setNotes] = useState([]);
  const [media, setMedia] = useState({});
  const [metIDs, setMetIDs] = useState([]);
  const [inputText, setInputText] = useState('');

  // const postNote = () => {
  //   const userId = Userfront.user.userId;
  //   const username = Userfront.user.name;
  //   axios.post('/notes', {
  //     text: inputText,
  //     media: media,
  //   });
  // };

  const postNote = () => {
    const userId = Userfront.user.userId;
    const username = Userfront.user.name;
    axios.post(
      '/notes',
      {
        user: username,
        userID: userId,
        mediaTitle: media.title,
        media: media.smallURL || media.text,
        mediaType: media.type,
        text: inputText,
        favorite: false,
        collection: 'none',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      },
    )
      .then(res => console.log('note posted', res))
      .catch(err => console.log(err));
  };

  const getNewPoem = () => {
    axios
      .get('/waltWhitmanPoem')
      .then((res) => {
        // console.log('poem res', res.data);
        const poem = {
          title: res.data.title,
          text: res.data.text,
          type: 'text',
        };
        setMedia(poem);
      })
      .catch((err) => console.log(err));
  };

  const getNewImage = (id) => {
    axios
      .get('/metAPIObject', { body: { id } })
      .then((res) => {
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
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('/notes', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      // .then((res) => console.log('get notes:', res.data))
      .then((res) => setNotes(res.data))
      .then(console.log('notes set'))
      .catch((err) => console.log(err));

    // axios.get('/metAPIQuery').then((res) => {
    //   setMetIDs(res.data);
    // });
  }, []);

  return (
    <MainFlexContainer>
      <HeaderFlexContainer>
        <AppHeading />
        <LogoutButton />
      </HeaderFlexContainer>
      <MediaContainer media={media} />
      <TextEntry inputText={inputText} setInputText={setInputText} />
      <Footer
        postNote={postNote}
        setInputText={setInputText}
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
