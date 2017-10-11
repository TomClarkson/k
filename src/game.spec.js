import gameReducer from './reducer';
import { startGame, addBrick, gameTick, userTyped, hitBrickAnimationFinished } from './actions';
import { getBottomBrick } from './reducer';

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

describe('game', () => {
  it('should determine the bottom brick', () => {
    const brickHeight = 40;
    const brickWidth = 40;
    const brickVy = 60;

    const stateAfterInit = gameReducer(undefined, {type: '@@INIT'});
    const startGameAction = startGame({
      characters,
      gameHeight: 600,
      gameWidth: 600,
      numberOfBricksForLevel: 3,
      brickHeight,
      brickWidth,
      brickVy
    });

    const stateAfterStartGame = gameReducer(stateAfterInit, startGameAction);
    const firstAddBrickAction = addBrick(stateAfterStartGame);
    const stateAfterFirstBrick = gameReducer(stateAfterStartGame, firstAddBrickAction);

    const bottomBrickAfterFirst = getBottomBrick(stateAfterFirstBrick.bricks);
    expect(bottomBrickAfterFirst.id).toEqual(firstAddBrickAction.brick.id);

    const secondAddBrickAction = addBrick(stateAfterFirstBrick);
    const stateAfterSecondBrick = gameReducer(stateAfterFirstBrick, secondAddBrickAction);

    const bottomBrickAfterSecond = getBottomBrick(stateAfterSecondBrick.bricks);
    expect(bottomBrickAfterSecond.id).toEqual(firstAddBrickAction.brick.id);
  });
  it('should move bricks down according to brickVy', () => {
    const brickHeight = 40;
    const brickWidth = 40;
    const brickVy = 60;

    const stateAfterInit = gameReducer(undefined, {type: '@@INIT'});
    const startGameAction = startGame({
      characters,
      gameHeight: 600,
      gameWidth: 600,
      numberOfBricksForLevel: 3,
      brickHeight,
      brickWidth,
      brickVy
    });

    const stateAfterStartGame = gameReducer(stateAfterInit, startGameAction);
    const firstAddBrickAction = addBrick(stateAfterStartGame);
    const stateAfterFirstBrick = gameReducer(stateAfterStartGame, firstAddBrickAction);

    const gameTickAction = gameTick({time: Date.now(), deltaTime: 1});

    const bottomBrickBeforeTick = getBottomBrick(stateAfterFirstBrick.bricks);
    expect(bottomBrickBeforeTick.top).toEqual(0);

    const stateAfterFirstTick = gameReducer(stateAfterFirstBrick, gameTickAction);

    const bottomBrickAfterTick = getBottomBrick(stateAfterFirstTick.bricks);
    expect(bottomBrickAfterTick.top).toEqual(brickVy);
  });
  it('should handle user typing', () => {
    const stateAfterInit = gameReducer(undefined, {type: '@@INIT'});
    const startGameAction = startGame({
      characters: [{character: 'か', romaji: 'ka'}],
      gameHeight: 600,
      gameWidth: 600,
      numberOfBricksForLevel: 3,
      brickHeight: 40,
      brickWidth: 40,
      brickVy: 60
    });
    const stateAfterStartGame = gameReducer(stateAfterInit, startGameAction);
    const firstAddBrickAction = addBrick(stateAfterStartGame);
    const stateAfterFirstBrick = gameReducer(stateAfterStartGame, firstAddBrickAction);

    const userTypedWrongAction = userTyped('p');
    const stateAfterUserTypedWrong = gameReducer(stateAfterFirstBrick, userTypedWrongAction);

    expect(stateAfterUserTypedWrong.userAnswerIsIncorrect).toEqual(true);
    expect(stateAfterUserTypedWrong.userText).toEqual('');

    const bottomBrickAfterTypedWrong = getBottomBrick(stateAfterUserTypedWrong.bricks);
    expect(bottomBrickAfterTypedWrong.userAnsweredWrong).toEqual(true);

    const userTypedCorrectAction = userTyped('ka');
    const stateAfterUserTypedCorrect = gameReducer(stateAfterUserTypedWrong, userTypedCorrectAction);
    expect(stateAfterUserTypedCorrect.bricks.length).toEqual(0);
    expect(stateAfterUserTypedCorrect.hitBricks.length).toEqual(1);
    expect(stateAfterUserTypedCorrect.userAnswerIsIncorrect).toEqual(false);

  });

  it('should remove hitBricks and complete game', () => {
    const stateAfterInit = gameReducer(undefined, {type: '@@INIT'});
    const startGameAction = startGame({
      characters: [{character: 'か', romaji: 'ka'}],
      gameHeight: 600,
      gameWidth: 600,
      numberOfBricksForLevel: 1,
      brickHeight: 40,
      brickWidth: 40,
      brickVy: 60
    });
    const stateAfterStartGame = gameReducer(stateAfterInit, startGameAction);
    const firstAddBrickAction = addBrick(stateAfterStartGame);
    const stateAfterFirstBrick = gameReducer(stateAfterStartGame, firstAddBrickAction);
    const userTypedCorrectAction = userTyped('ka');
    const stateAfterUserTypedCorrect = gameReducer(stateAfterFirstBrick, userTypedCorrectAction);
    // const bottomBrick = getBottomBrick(stateAfterUserTypedCorrect.bricks);
    const hitBrickAnimationFinishedAction = hitBrickAnimationFinished(
      stateAfterUserTypedCorrect.hitBricks[0].id
    );
    const stateAfterHitBrickAnimationFinished = gameReducer(stateAfterUserTypedCorrect, hitBrickAnimationFinishedAction);
    expect(stateAfterHitBrickAnimationFinished.hitBricks.length).toEqual(0);
    expect(stateAfterHitBrickAnimationFinished.hasCompletedLevel).toEqual(true);
  });
});


