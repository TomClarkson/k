import { Observable, Scheduler } from 'rxjs';
import uuid from 'uuid';
import { getBottomBrick } from './reducer';

export const userSelectedCharacter = (character) => ({
  type: 'USER_SELECTED_CHARACTER',
  character
});

const getRandomItem = (arr) =>
  arr[Math.floor(Math.random()*arr.length)];

const getRandomPosition = (min, max) =>
  Math.floor(Math.random()*max - min);

export const createBrick = ({ brickVy, characters, brickWidth, brickHeight, gameWidth }) => {
  const character = getRandomItem(characters);

  const left = getRandomPosition(0, gameWidth - brickWidth);

  const brick = {
    id: uuid.v4(),
    top: 0,
    left,
    width: brickWidth,
    height: brickHeight,
    vy: brickVy,
    ...character
  };

  return brick;
};

export const addBrick = (gameState) => {
  const brick = createBrick(gameState);

  return {
    type: 'KANA_SHOOT_GAME_ADD_BRICK',
    brick
  };
};

export const playHiriganaLevels = () => ({
  type: 'PLAY_HIRIGANA_LEVELS'
});

export const playKatakanaLevels = () => ({
  type: 'PLAY_KATAKANA_LEVELS'
});

export const startGame = ({
  gameHeight,
  gameWidth,
  numberOfBricksForLevel,
  brickHeight,
  brickWidth,
  brickVy,
  isTouch = false,
  spikeSize = 200,
  userInputAreaHeight = 80
}) => ({
  type: "START_KANA_SHOOT_GAME",
  gameHeight,
  gameWidth,
  numberOfBricksForLevel,
  brickHeight,
  brickWidth,
  brickVy,
  isTouch,
  spikeSize,
  userInputAreaHeight
});

export const userTyped = (userText) => ({
  type: 'KANA_SHOOT_GAME_TEXT_ENTERED',
  userText
});

export const brickHitByBullet = (brickId) => ({
  type: 'KANA_SHOOT_GAME_BULLET_HIT_BRICK',
  brickId
});

export const hitBrickAnimationFinished = (brickId) => ({
  type: 'KANA_SHOOT_GAME_HIT_BRICK_ANIMATION_FINISHED',
  brickId
});

export const stopGame = () => ({
  type: 'STOP_KANA_SHOOT_GAME'
});

export const selectLevel = (index) => ({
  type: 'SELECT_KANA_SHOOT_LEVEL',
  index
});

export const startLevel = (index) => ({
  type: 'START_KANA_SHOOT_LEVEL',
  index
});

const makeBrickIntervals$ = (interval) => {
  const immediate$ = Observable.of(1);
  const interval$ = Observable
    .timer(100)
    .switchMap(() => Observable.interval(2000));

  return Observable.merge(immediate$, interval$);
};

const addBrickEpic = (action$, { getState }) =>
  action$.ofType("START_KANA_SHOOT_LEVEL")
    .switchMap(() =>
        makeBrickIntervals$(2000)
        .do(() => console.log('shes ticking '))
        .map(() =>
          addBrick(getState().kanaShootGame)
        )
        .take(getState().kanaShootGame.numberOfBricksForLevel)
        .takeUntil(action$.ofType('STOP_KANA_SHOOT_GAME'))
        .takeWhile(() =>
          !getState().kanaShootGame.hasLostLevel
        )
    );

const TICKER_INTERVAL = 1000 / 60;
// const TICKER_INTERVAL = 1000;

const makeTimeObj = () => ({
  time: Date.now()
});

export const gameTick = (({time, deltaTime}) => ({
  type: 'KANA_SHOOT_GAME_TICK',
  time,
  deltaTime
}));

const userTypedCharacterEpic = (action$, { getState }) =>
  action$.ofType('KANA_SHOOT_GAME_TEXT_ENTERED')
    .switchMap(({ userText }) => {
      const bottomBrick = getBottomBrick(getState().kanaShootGame.bricks);
      const brickId = bottomBrick.id;
      const correct = bottomBrick.romaji === userText;
      if(correct) {
        return Observable.merge(
          Observable.of({
            type: 'KANA_SHOOT_GOT_BRICK_CORRECT',
            bottomBrick,
            brickId
          }),
          Observable
            .timer(300)
            .mapTo({type: 'KANA_SHOOT_GAME_CLEAR_TEXT'})
        );
      }
      return Observable.of({
        type: 'KANA_SHOOT_GOT_BRICK_INCORRECT',
        bottomBrick,
        brickId
      });
    });

const userCharacterSelectedEpic = (action$, { getState }) =>
  action$.ofType('USER_SELECTED_CHARACTER')
    .switchMap(({character}) => {
      const bottomBrick = getBottomBrick(getState().kanaShootGame.bricks);
      const brickId = bottomBrick.id;
      const correct = bottomBrick.romaji === character.romaji;
      if(correct) {
        return Observable.of({
          type: 'KANA_SHOOT_GOT_BRICK_CORRECT',
          bottomBrick,
          brickId
        });
      }
      return Observable.of({
        type: 'KANA_SHOOT_GOT_BRICK_INCORRECT',
        bottomBrick,
        brickId
      });
    });

const brickCorrectAnimationEpic = (action$) =>
  action$.ofType('KANA_SHOOT_GOT_BRICK_CORRECT')
    .mergeMap(({bottomBrick}) =>
      Observable
        .timer(300)
        .map(() => ({
          type: 'KANA_SHOOT_ANIMATE_OUT_CORRECT_BRICK',
          brick: bottomBrick
        }))
    );


const gameTickEpic = (action$, { getState }) =>
  action$.ofType("START_KANA_SHOOT_LEVEL")
    .switchMap(() =>
      Observable
        .interval(TICKER_INTERVAL, Scheduler.requestAnimationFrame)
        .takeUntil(action$.ofType('STOP_KANA_SHOOT_GAME'))
        .takeWhile(() =>
          !getState().kanaShootGame.hasCompletedLevel
        )
        .takeWhile(() =>
          !getState().kanaShootGame.hasLostLevel
        )
        .map(makeTimeObj)
        .scan(
          (previous, current) => ({
            time: current.time,
            deltaTime: (current.time - previous.time) / 1000
          }),
          makeTimeObj()
        )
        .map(gameTick)
    );

export const epics = [
  gameTickEpic,
  addBrickEpic,
  userCharacterSelectedEpic,
  brickCorrectAnimationEpic,
  userTypedCharacterEpic
];
