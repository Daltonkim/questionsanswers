import { questionairesConstants } from './_constants';
const initialState = {
    questions: []
}

export const questions = (state = initialState, action) => {
    switch (action.type) {
        case questionairesConstants.QUESTION_SUBMIT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case questionairesConstants.QUESTION_SUBMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: [...state.questions, action.data]

            }
        case questionairesConstants.QUESTION_SUBMIT_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case questionairesConstants.QUESTION_EDIT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case questionairesConstants.QUESTION_EDIT_SUCCESS:
            //update payload
            const updatePayload = state.questions.map(item => {
                if (action.data.uid === item.uid) {
                    item.question = action.data.question;
                    item.answer = action.data.answer;
                    item.hasDelay = action.data.hasDelay;
                }
                return item
            })
            return {
                ...state,
                loading: false,
                questions: updatePayload

            }
        case questionairesConstants.QUESTION_EDIT_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case questionairesConstants.QUESTION_GETALL_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case questionairesConstants.QUESTION_GETALL_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.data
            }
        case questionairesConstants.QUESTION_GETALL_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case questionairesConstants.QUESTION_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case questionairesConstants.QUESTION_DELETE_SUCCESS:
            //remove item
            const removeItem = state.questions.filter(item => item.uid !== action.data)
            return {
                ...state,
                loading: false,
                questions: removeItem
            }
        case questionairesConstants.QUESTION_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case questionairesConstants.QUESTIONS_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case questionairesConstants.QUESTIONS_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: []
            }
        case questionairesConstants.QUESTIONS_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
};
