import { SET_USER } from './actions';

export const initialState = {
	currentUser: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
