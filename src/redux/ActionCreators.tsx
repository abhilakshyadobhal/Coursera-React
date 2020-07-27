import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../data/dishes";
import { actionTypes } from "react-redux-form";

export const addComment = (dishId: any, rating: any, author: any, comment: any) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch: any) => {
  dispatch(dishesLoading());

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => (dispatch: any) => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess: any) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes: any) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
