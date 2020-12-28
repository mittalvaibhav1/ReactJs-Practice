import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
        isLoading : true,
        promotions : [],
        errMess : ''
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {
                isLoading : false,
                promotions : action.payload,
                errMess : null
            }
        case ActionTypes.PROMOS_LOADING:
            return {
                isLoading : true,
                promotions : [],
                errMess : null
            }
        case ActionTypes.PROMOS_FAILED:
            return {
                isLoading : false,
                promotions : [],
                errMess : action.payload
            }
        default :
            return state;
    }
}