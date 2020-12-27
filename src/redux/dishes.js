import * as ActionTypes from './ActionTypes';
export const Dishes = (state = {
        isLoading : true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                isLoading : false,
                dishes : action.payload,
                errMess : null
            }
        case ActionTypes.DISHES_LOADING:
            return {
                isLoading : true,
                dishes : [],
                errMess : null
            }
        case ActionTypes.DISHES_FAILED:
            return {
                isLoading : false,
                dishes : [],
                errMess : action.payload
            }
        default :
            return state;
    }
}