import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

const epic = (action$) => 
	action$.ofType('START_TICK')
		.switchMap(() =>
			Observable.interval(1000)
				.mapTo({type: "tick"})
		);

	

export default function() {
    return (action$, store) => 
        combineEpics(epic)(action$, store)
}