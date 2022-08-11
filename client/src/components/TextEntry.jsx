import React from 'react';

export default function TextEntry({ inputText, setInputText }) {
  return (
    <div id="textEntry">
      <textarea
        id="userText"
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}
