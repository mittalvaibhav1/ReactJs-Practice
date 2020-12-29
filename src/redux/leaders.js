import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
        isLoading : true,
        leaders : [],
        errMess : null
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS :
            return {
                isLoading : false,
                leaders : action.payload,
                errMess : null
            }
        case ActionTypes.LEADERS_FAILED :
            return {
                isLoading : false,
                leaders : [],
                errMess : action.payload
            }
        case ActionTypes.LEADERS_LOADING :
            return {
                ...state,
                isLoading : true
            }         
        default:
            return state;
    }
}