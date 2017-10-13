import { combineEpics } from 'redux-observable';
import { epics as kanjiGoldEpics } from './actions';

export default function() {
    return combineEpics(...kanjiGoldEpics);
}