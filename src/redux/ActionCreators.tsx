import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../data/baseUrl";

export const addComment = (comment: any) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId: any, rating: any, author: any, comment: any) => (dispatch: any) => {
  const newComment: any = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };

  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;

          throw error;
        }
      },
      (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("Post comments: " + error.message);
      alert("Comments could not be posted:\n" + error.message);
    });
};

export const fetchDishes = () => (dispatch: any) => {
  dispatch(dishesLoading());

  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;

          throw error;
        }
      },
      (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;

          throw error;
        }
      },
      (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
      }
    )

    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;

          throw error;
        }
      },
      (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
      }
    )

    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
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

export const fetchLeaders = () => (dispatch: any) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error("Error " + response.status + ": " + response.statusText);
          error.response = response;

          throw error;
        }
      },
      (error) => {
        var errorMessage = new Error(error.errorMessage);
        throw errorMessage;
      }
    )

    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => (dispatch: any) => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmess: any) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});

export const addLeaders = (leaders: any) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});
