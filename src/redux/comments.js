import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.COMMENTS_FAILED:
            return {
                errMess : action.payload,
                comments : []
            }
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {
                errMess : '',
                comments : [...state.comments,comment]
            }
        default:
            return state;
    }
}