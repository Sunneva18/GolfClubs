import * as constants from '../constants/index';

export default function (state = [], action) { 
	switch (action.type) {
	case constants.SET_ALL_CLUBS: return action.payload;
	default: return state;
	}
}