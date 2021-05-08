import { fromJS } from 'immutable';

const defaultState = fromJS({
	aaa: 1,
});

//eslint-disable-next-line
export default (state = defaultState, action) => {
	return state;
};
