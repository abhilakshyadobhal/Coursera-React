import { DISHES } from '../data/dishes';
import { COMMENTS } from '../data/comments';
import { PROMOTIONS } from '../data/promotions';
import { LEADERS } from '../data/leaders';

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

export const Reducer = (state: any = initialState, action: any) => {
  return state;
};
