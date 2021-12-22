import { modalConstants } from "./_constants";

const initialState = {
    type: null,
    content: {},
};

export const modals = (state = initialState, action) => {
    switch (action.type) {
        case modalConstants.ADD_QUESTION:
            return {
                content: action.content,
                type: modalConstants.ADD_QUESTION,
            };

        case modalConstants.EDIT_QUESTION:
            return {
                content: action.content,
                type: modalConstants.EDIT_QUESTION,
            };

        case modalConstants.DELETE_QUESTION:
            return {
                content: action.content,
                type: modalConstants.DELETE_QUESTION,
            };

        case modalConstants.DELETE_ALL_QUESTIONS:
            return {
                content: action.content,
                type: modalConstants.DELETE_ALL_QUESTIONS,
            };
        
        case modalConstants.HIDE_MODAL:
        case modalConstants.CLEAR:
            return initialState;
        default:
            return state;
    }
};
