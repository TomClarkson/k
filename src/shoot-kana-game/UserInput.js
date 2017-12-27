import React from 'react';
import TypingInput from './TypingInput';
import CharacterChoiceTouchbar from './CharacterChoiceTouchbar';
import { connect } from 'react-redux';
import { userTyped } from '../actions';

const userInputStyle = {
  background: '#EBB657',
  borderTop: '4px solid #B2B2B2',
  display: 'flex',
  padding: 15
};

export const UserInputPresentation = ({
  isTouch,
  height,
  width,
  userSelectedCharacter,
  bottomBrick,
  characters,
  userTyped,
  userText,
  userAnswerIsIncorrect
}) => {
  return (
    <div style={{...userInputStyle, height, width}}>
      {!isTouch &&
        <TypingInput
          userText={userText}
          userAnswerIsIncorrect={userAnswerIsIncorrect}
          userTyped={userTyped}
          />
      }
      {isTouch &&
        <CharacterChoiceTouchbar
          userSelectedCharacter={userSelectedCharacter}
          bottomBrick={bottomBrick}
          characters={characters} />
      }
    </div>
  );
};

export default UserInputPresentation;
