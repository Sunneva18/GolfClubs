import * as constants from '../constants';

export const setAllClubs = (clubs) => ({
	type: constants.SET_ALL_CLUBS,
	payload: clubs
});