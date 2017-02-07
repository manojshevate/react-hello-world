import { SET_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'

const initialState = SHOW_ALL;

export default function filter( state = initialState, action) {
	switch(action.type) {
		case SET_FILTER : 
			return action.filter;

		default : 
			return state;
	}
}