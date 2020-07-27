import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../data/baseUrl";

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
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch: any) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess: any) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = (comments: any) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch: any) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => (dispatch: any) => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmess: any) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

export const addPromos = (promos: any) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
