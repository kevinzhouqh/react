import { COMMENTS } from '../share/comment';
import { PROMOTIONS } from '../share/promotion';
import { LEADERS } from '../share/leaders';
import { DISHES } from '../share/dishes';

export const initialState = {
	  dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
};
//default is initialstate
export const Reducer = (state  = initialState, action) => {
	return state;
};