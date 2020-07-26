import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId: any, rating: any, author: any, comment: any) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
