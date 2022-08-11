import Userfront from '@userfront/react';
import axios from 'axios';

Userfront.init('6nz4ydmn');

async function getNotes() {
  const res = await axios.get('/notes', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Userfront.accessToken()}`,
    },
  });

  console.log(res);
}

async function postNote(note) {
  const res = await axios.post('/notes', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Userfront.accessToken()}`,
    },
  });

  console.log(res);
}

export { getNotes, postNote };
