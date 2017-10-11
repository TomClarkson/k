import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { makeInitialState } from '../reducer';
import { startGame, createBrick, startLevel, playHiriganaLevels } from '../actions';
import YouWinGameScreen from './YouWinGameScreen';
import PointPlusBox from './PointPlusBox';
import HitBrick from './HitBrick';
import Brick from './Brick';
import SelectHiriganaKatakanaScreen from './SelectHiriganaKatakanaScreen';
import SelectLevelBoxScreen from './SelectLevelBoxScreen';
import BodyMovin from '../animations/BodyMovin';
import happySpikeAnimationData from './happySpike.json';
import bubbleExplosionWithWrongBubbleData from './bubbleExplosionWithWrongBubble.json';
import sadSpikeAnimationData from './sadSpike.json';
import ShooterSpike from './ShooterSpike';
import CharacterChoiceTouchbar from './CharacterChoiceTouchbar';
import TypingInputPresentation from './TypingInput';
import { UserInputPresentation } from './UserInput';
import ReduxWrapper from '../storybook/ReduxWrapper';
import ShootKanaGameWrapper from './ShootKanaGameWrapper';
import spikeFallingOverAnimationData from './spikeFallingOver.json';
import HomeBackground from './HomeBackground';

const characters = [
  {
    character: 'あ',
    romaji: 'a'
  },
  {
    character: 'い',
    romaji: 'i'
  },
  {
    character: 'う',
    romaji: 'u'
  },
  {
    character: 'え',
    romaji: 'e'
  },
  {
    character: 'お',
    romaji: 'o'
  },
];

const gameHeight = 600;
const gameWidth = 400;

const brick = createBrick({
  brickVy: 10,
  characters,
  brickWidth: 80,
  brickHeight: 80,
  gameWidth
});

const stories = storiesOf('Shoot Kana Game', module);
stories.addDecorator(withKnobs);

const bricks = [
  {
    id: '1',
    top: 0,
    left: 80,
    width: 40,
    height: 40,
    character: 'あ',
    romaji: 'a'
  },
    {
      id: '2',
      top: 100,
      left: 160,
      width: 40,
      height: 40,
      character: 'い',
      romaji: 'i'
    }
];


const hitBrickWithWrong = {
  ...brick,
  top: 100,
  userAnsweredWrong: true
};

stories
  .add('Bubble Explosion Animation', () => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: bubbleExplosionWithWrongBubbleData
    };

    return (
      <div style={{height: 400, width: 400}}>
        <BodyMovin options={bodymovinOptions} />
      </div>
    );
  })
  .add('Shooter Spike', () => {
    return (
      <div style={{height: 200, width: 200}}>
        <ShooterSpike
          isDead={boolean('Is Dead', false)}
          spikeLeft={number('Spike left', 200)}
          isShooting={boolean('Is shooting', false)} />
      </div>
    );
  })
  .add('Spike Happy Animation', () => {
    const bodymovinOptions = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: happySpikeAnimationData
    };

    return (
      <div style={{height: 400, width: 400}}>
        <BodyMovin options={bodymovinOptions} />
      </div>
    );
  })
  .add('Spike Falling Over', () => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: spikeFallingOverAnimationData
    };

    return (
      <div style={{height: 400, width: 400}}>
        <BodyMovin options={bodymovinOptions} />
      </div>
    );
  })
  .add('Sad Spike Animation', () => {
    const bodymovinOptions = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: sadSpikeAnimationData
    };

    return (
      <div style={{height: 400, width: 400}}>
        <BodyMovin options={bodymovinOptions} />
      </div>
    );
  })
  .add('Win Game', () => (
    <div style={{position: 'relative', background: 'blue', height: gameHeight, width: gameWidth}}>
      <YouWinGameScreen />
    </div>
  ))
  .add('Hit Brick', () => {
    // hit brick needs to be defined outside the function as this function is getting called twice for some reason
    return (
      <div style={{position: 'relative', background: '#363636', height: gameHeight, width: gameWidth}}>
        <HitBrick
          ballStartTop={gameHeight}
          hitBrickAnimationFinished={action('hitBrickAnimationFinished')}
          brickHitByBullet={action('brickHitByBullet')}
          brick={hitBrickWithWrong} />
      </div>
    );
  })
  .add('Point Plus Box', () => (
    <PointPlusBox />
  ))
  .add('Brick', () => {
    const brick = createBrick({
      brickVy: 10,
      characters,
      brickWidth: 80,
      brickHeight: 80,
      gameWidth
    });

    const userAnsweredWrong = boolean('User answered wrong', false);

    const brickWithUserAnsweredWrong = {
      ...brick,
      userAnsweredWrong,
      top: 100
    };

    return (
      <div style={{position: 'relative', background: '#363636', height: gameHeight, width: gameWidth}}>
        <Brick
          brick={brickWithUserAnsweredWrong} />
      </div>
    )
  })
  .add('Home Background', () => {
    const boxes = [
      {
        id: 0,
        title: 'a'
      },
      {
        id: 1,
        title: 'b'
      },
      {
        id: 3,
        title: 'c'
      },
      {
        id: 4,
        title: 'd'
      },
      {
        id: 5,
        title: 'e'
      },
      {
        id: 6,
        title: 'f'
      },
    ];
    return (
      <HomeBackground
        title="Select level"
        width={gameWidth}
        height={gameHeight}>
        <SelectLevelBoxScreen
          onSelectBox={action('Selected Box')}
          boxes={boxes} />
      </HomeBackground>
    );
  })
  .add('Select hirigana/katakana screen', () => (
    <div style={{position: 'relative', background: 'blue', height: gameHeight, width: gameWidth}}>
      <SelectHiriganaKatakanaScreen
        selectHirigana={action('hirigana')}
        selectKatakana={action('katakana')}
      />
    </div>
  ))
  .add('Select Level Box', () => {
    const boxes = [
      {
        id: 0,
        title: 'a'
      },
      {
        id: 1,
        title: 'b'
      },
      {
        id: 3,
        title: 'c'
      },
      {
        id: 4,
        title: 'd'
      },
      {
        id: 5,
        title: 'e'
      },
      {
        id: 6,
        title: 'f'
      },
    ];
    return (
      <div style={{position: 'relative', background: '#fafafa', height: gameHeight, width: gameWidth}}>
        <SelectLevelBoxScreen
          onSelectBox={action('Selected Box')}
          boxes={boxes} />
      </div>
    );
  })
  .add('Character Choice Touchbar', () => {
    const fourCharacters = characters.slice(0, 4);
    return (
      <div style={{height: 60, background: 'pink'}}>
        <CharacterChoiceTouchbar
          width={gameWidth}
          userSelectedCharacter={action('user selected character')}
          characters={fourCharacters} />
      </div>
    );
  })
  .add('Typing Input', () =>
    <TypingInputPresentation
      userText="wa"
      userAnswerIsIncorrect={boolean('User answer is incorrect', true)}
      userTyped={action('User Typed')}
    />
  )
  .add('User Input', () => {
    const fourCharacters = characters.slice(0, 4);
    return (
      <UserInputPresentation
        bottomBrick={brick}
        height={80}
        isTouch={boolean('Is Touch', true)}
        width={gameWidth}
        userTyped={action('User typed')}
        userText={text('User text', '')}
        userAnswerIsIncorrect={boolean('User answer is incorrect', false)}
        userSelectedCharacter={action('user selected character')}
        characters={fourCharacters} />
    );
  })
//   .add('With Redux', () => {
//     const startGameActionCreator = () => startGame({
//       gameHeight: 600,
//       gameWidth: 400,
//       numberOfBricksForLevel: 3,
//       brickHeight: 80,
//       brickWidth: 80,
//       brickVy: 60,
//       isTouch: false,
//       spikeSize: 200,
//       userInputAreaHeight: 80
//     });

//     const startLevelActionCreator = () => startLevel(0);

//     return (
//       <ReduxWrapper initialActions={[startGameActionCreator, playHiriganaLevels, startLevelActionCreator]}>
//         <ShootKanaGameWrapper />
//       </ReduxWrapper>
//     );
//   });
