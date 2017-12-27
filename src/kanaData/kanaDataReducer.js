import seedHiriganaData from './seedHiriganaData';

const hiriganaLevels = {
  h01: {
    characters: ['あ', 'い', 'う', 'え', 'お'],
    name: 'The Vowels'
  },
  h02: {
    characters: ['か', 'き', 'く',	'け', 'こ'],
    name: 'The K Line'
  },
  h03: {
    characters: ['さ', 'し', 'す', 'せ', 'そ'],
    name: 'The S Line'
  },
  h04: {
    characters: ['た', 'ち', 'つ', 'て', 'と'],
    name: 'The T Line'
  },
  h05: {
    characters: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    name: 'The H Line'
  },
  h06: {
    characters: ['ま', 'み', 'む', 'め', 'も'],
    name: 'The M Line'
  },
  h07: {
    characters: ['ら', 'り', 'る', 'れ', 'ろ'],
    name: 'The R Line'
  },
  h08: {
    characters: ['や', 'ゆ', 'よ', 'わ', 'を'],
    name: 'The Y and W Lines'    
  }
};

const initialState = {
  hirigana: seedHiriganaData,
  hiriganaLevels,
  katakana: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HIRIGANA_DATA_LOADED':
      return {
        ...state,
        hirigana: action.hiriganaData
      };
    default:
      return state;
  }
};