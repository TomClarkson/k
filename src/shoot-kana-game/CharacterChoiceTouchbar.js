import React, { Component } from 'react';
import shuffle from './shuffle';

const boxStyle = {
  background: '#fff',
  flex: 1,
  marginRight: 20,
  boxShadow: '0px 1px 1px 1px #B2B2B2',
  borderRadius: 4,
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
};

const wrapperStyle = {
  display: 'flex',
  flex: 1,
  paddingLeft: 20
};

export class CharacterChoiceTouchbarPresentation extends Component {
  render () {
    const { characters, userSelectedCharacter } = this.props;

    return (
      <div style={wrapperStyle}>
        {characters.map((c, i) =>
          <div
            key={i}
            style={boxStyle}
            onClick={() => userSelectedCharacter(c)}
          >
            <span>{c.romaji}</span>
          </div>
        )}
      </div>
    )
  }
}

export default class CharacterChoiceTouchbar extends Component {
  constructor(props) {
    super(props);
    const { characters, bottomBrick } = this.props;
    let choiceCharacters = [];
    if(bottomBrick) {
      const choices = characters
        .filter(c => c.character !== bottomBrick.character);
      const wrongChoices = shuffle(choices).slice(0, 3);
      choiceCharacters = shuffle(
        [
          ...wrongChoices,
          {character: bottomBrick.character, romaji: bottomBrick.romaji}
        ]
      );
    }
    this.state = {
      characters: choiceCharacters
    };
  }
  render() {
    const { characters } = this.state;
    const { userSelectedCharacter } = this.props;
    return (
      <CharacterChoiceTouchbarPresentation
        userSelectedCharacter={userSelectedCharacter}
        characters={characters} />
    );
  }
}
