import levelCharacters from './levelCharacters';

const makeInitialGameState = () => {
  return {

  };
};

const initialState = {
  isTouch: false,
  isOnHomeScreen: false,
  kanaType: 'hirigana',
  isOnLevelSelect: true,
  levelCharacters,
  characters: [],
  gameHeight: null,
  gameWidth: null,
  numberOfBricksForLevel: null,
  failedBrickCount: 0,
  successBrickCount: 0,
  brickHeight: null,
  brickWidth: null,
  brickVy: null,
  bricks: [],
  hitBricks: [],
  userText: '',
  shooterWidth: 30,
  hasLostLevel: false,
  hasCompletedLevel: false,
  userAnswerIsIncorrect: false,
  currentLevelIndex: null,
  spikeSize: 200,
  userInputAreaHeight: 80,
  spikeIsShooting: false
};

// spikes ball left is 105/200
// bullet width is 40px

const sortByBottom = (brickA, brickB) => {
  if (brickA.top < brickB.top) {
    return 1;
  }
  if (brickA.top > brickB.top) {
    return -1;
  }
  // a must be equal to b
  return 0;
};

export const getBottomBrick = (bricks) => {
  if(! bricks.length) return null;
  return bricks.sort(sortByBottom)[0];
};

const moveBricksDown = (state, action) => {
  const totalBricks = state.bricks.map(brick => ({
    ...brick,
    top: brick.top + (brick.vy * action.deltaTime)
  }));

  const hitBricks = state.hitBricks.map(brick => ({
    ...brick,
    top: brick.top + (brick.vy * action.deltaTime)
  }));

  const { spikeSize, gameHeight, userInputAreaHeight } = state;

  const brickAreaHeight = getBrickAreaHeight({ spikeSize, gameHeight, userInputAreaHeight });
  const brickHeightPlusSpikePadding = brickAreaHeight + 40;

  const bricksNotAtBottom = totalBricks
    .filter(b => (b.top + b.height) < brickHeightPlusSpikePadding);

  const hasLostLevel = totalBricks.length > bricksNotAtBottom.length;

  return {
    ...state,
    hitBricks,
    bricks: totalBricks,
    hasLostLevel
  };
};

export const getBrickAreaHeight = ({gameHeight, spikeSize, userInputAreaHeight}) =>
  gameHeight - spikeSize - userInputAreaHeight;

export default (state = initialState, action) => {
  switch(action.type) {
    case 'PLAY_HIRIGANA_LEVELS':
      return {
        ...state,
        kanaType: 'hirigana',
        isOnLevelSelect: true,
        isOnHomeScreen: false
      };
    case 'PLAY_KATAKANA_LEVELS':
      return {
        ...state,
        kanaType: 'katakana',
        isOnLevelSelect: true,
        isOnHomeScreen: false
      };
    case 'SELECT_KANA_SHOOT_LEVEL':
      return {
        ...state,
        isOnLevelSelect: false,
        currentLevelIndex: action.index,
        isOnLevelPreview: true
      };
    case 'START_KANA_SHOOT_GAME':
      return {
        ...state,
        gameHeight: action.gameHeight,
        gameWidth: action.gameWidth,
        brickHeight: action.brickHeight,
        brickWidth: action.brickWidth,
        brickVy: action.brickVy,
        isTouch: action.isTouch,
        spikeSize: action.spikeSize,
        userInputAreaHeight: action.userInputAreaHeight
      };
    case 'START_KANA_SHOOT_LEVEL':
      const charactersForLevel = state.levelCharacters[state.kanaType][action.index];

      return {
        ...state,
        characters: charactersForLevel,
        numberOfBricksForLevel: 5,
        failedBrickCount: 0,
        successBrickCount: 0,
        isOnLevelSelect: false,
        isOnLevelPreview: false,
        currentLevelIndex: action.index,
        hasCompletedLevel: false,
        bricks: [],
        hitBricks: [],
        hasLostLevel: false
      };
    case 'KANA_SHOOT_GAME_TICK':
      return moveBricksDown(state, action);
    case 'KANA_SHOOT_GAME_ADD_BRICK':
      return {
        ...state,
        bricks: state.bricks.concat(action.brick)
      };
    case 'KANA_SHOOT_GAME_TEXT_ENTERED':
      const bottomBrick = getBottomBrick(state.bricks);
      const textMatchesBottomBrick = bottomBrick && action.userText === bottomBrick.romaji;
      if(! bottomBrick || textMatchesBottomBrick) {
        return {
          ...state,
          userText: action.userText,
          userAnswerIsIncorrect: false
        };
      }

      const lessCharactersThanAnswer = action.userText.length < bottomBrick.romaji.length;
      // for example entered k for ka
      if(lessCharactersThanAnswer && bottomBrick.romaji.startsWith(action.userText)) {
        return {
          ...state,
          userText: action.userText
        };
      }

      const bricksWithWrongItem = state.bricks.map(b => b.id !== bottomBrick.id ? b : {
          ...b,
          userAnsweredWrong: true
        });

      return {
        ...state,
        userAnswerIsIncorrect: true,
        bricks: bricksWithWrongItem
      };

      // const newBricks = state.bricks.filter(b => b.id !== bottomBrick.id);
      //
      // const successBrickCount = state.successBrickCount + 1;
      //
      // return {
      //   ...state,
      //   hitBricks: state.hitBricks.concat(bottomBrick),
      //   bricks: newBricks,
      //   successBrickCount,
      //   userText: '',
      //   userAnswerIsIncorrect: false
      // };
    case 'KANA_SHOOT_GAME_CLEAR_TEXT':
      return {
        ...state,
        userText: ''
      };
    case 'KANA_SHOOT_GAME_BULLET_HIT_BRICK':
      return {
        ...state,
        hitBricks: state.hitBricks.map(b => b.id !== action.brickId ? b : {
            ...b,
            vy: 0
          })
      };
    case 'KANA_SHOOT_GAME_HIT_BRICK_ANIMATION_FINISHED':
      const newHitBricks = state.hitBricks.filter(hitBrick => hitBrick.id !== action.brickId);
      const hasCompletedLevel = newHitBricks.length === 0 && state.successBrickCount === state.numberOfBricksForLevel;

      return {
        ...state,
        hitBricks: newHitBricks,
        hasCompletedLevel
      };
    case 'KANA_SHOOT_GOT_BRICK_CORRECT':
      return {
        ...state,
        successBrickCount: state.successBrickCount + 1,
        spikeIsShooting: true
      };
    case 'KANA_SHOOT_ANIMATE_OUT_CORRECT_BRICK': {
      const hitBrick = state.bricks.find(b => b.id === action.brick.id);
      const hitBricks = !hitBrick ? state.hitBricks : state.hitBricks.concat(hitBrick);

      return {
        ...state,
        spikeIsShooting: false,
        hitBricks,
        bricks: state.bricks.filter(b => b.id !== action.brick.id),
      };
    }
    default:
      return state;
  }
};




