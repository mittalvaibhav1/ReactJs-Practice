import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:comment
});

export const postFeedback = (newFeedback) => (dispatch) => {
    return fetch(baseUrl + 'feedback', {
        method : "POST",
        body : newFeedback,
        headers : {
            "Content-Type" : 'application/json'
        },
        credentials : "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            let error = new Error("Error: " + response.status + " " + response.statusText);
            error.response = error;
            throw error;
        }
    },
    error => {
        throw error;
    })
    .then(response => response.json())
    .then(feedback => alert("Thank you for your feedback!\n" + JSON.stringify(feedback)))
    .catch(error => console.log(error.message));
}
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers : {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            let error = new Error('Error: ' + response.status + ' ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => console.log(error.message))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            let errmess = new Error(error.message);
            throw errmess; //if unable to communicate to server
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type : ActionTypes.DISHES_LOADING
});

export const dishesFailed = (error) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : error
});

export const addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            let errmess = new Error(error.message);
            throw errmess; //if unable to communicate to server
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (error) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : error
});

export const addComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            let errmess = new Error(error.message);
            throw errmess; //if unable to communicate to server
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type : ActionTypes.PROMOS_LOADING
});

export const promosFailed = (error) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload : error
});

export const addPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
        .then((response) => {
            if(response.ok) {
                return response;
            }
            else {
                let error = new Error("Error: " + response.status + " " + response.statusText);
                error.response = response;
                throw error;
            }
        },
        (error) => {
            throw error;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message))); 
}

export const leadersLoading = () => ({
    type : ActionTypes.LEADERS_LOADING
})

export const addLeaders = (leaders) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
})

export const leadersFailed = (error) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload : error
})