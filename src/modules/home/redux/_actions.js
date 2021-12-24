import { isEmpty } from 'lodash';
import { questionairesConstants } from './_constants';
import { questionairesService } from './_service';

export const questionaireActions = {
    addQuestion,
    editQuestion,
    getAllQuestions,
    deleteQuestion,
    deleteAllQuestions,
};

function addQuestion(question) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            // if (isEmpty(id)) {
            //     throw new Error('Application ID cannot be empty');
            // }

            if (isEmpty(question)) {
                throw new Error('Comment cannot be empty');
            }

            questionairesService.addQuestion(question)
                .then(
                    () => {
                        dispatch(success(question));
                    },
                    (error) => {
                        dispatch(failure(error));
                    },
                );
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function request(data) { return { type: questionairesConstants.QUESTION_SUBMIT_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTION_SUBMIT_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTION_SUBMIT_FAILURE, error }; }
}

function editQuestion(question) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            if (isEmpty(question)) {
                throw new Error('Question cannot be empty');
            }

            questionairesService.addQuestion(question)
                .then(
                    () => {
                        dispatch(success(question));
                    },
                    (error) => {
                        dispatch(failure(error));
                    },
                );
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function request(data) { return { type: questionairesConstants.QUESTION_EDIT_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTION_EDIT_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTION_EDIT_FAILURE, error }; }
}

function getAllQuestions(questions) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            questionairesService.getAllQuestions(questions)
                .then(
                    () => {
                        dispatch(success(questions));
                    },
                    (error) => {
                        dispatch(failure(error));
                    },
                );
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function request(data) { return { type: questionairesConstants.QUESTION_GETALL_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTION_GETALL_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTION_GETALL_FAILURE, error }; }
}

function deleteQuestion(id) {
    return (dispatch) => {
        dispatch(request({}));

        try {
             if (isEmpty(id)) {
                throw new Error('Question ID cannot be empty');
            }
            questionairesService.deleteQuestion(id)
                .then(
                    () => {
                        dispatch(success(id));
                    },
                    (error) => {
                        dispatch(failure(error));
                    },
                );
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function request(data) { return { type: questionairesConstants.QUESTION_DELETE_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTION_DELETE_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTION_DELETE_FAILURE, error }; }
}
function deleteAllQuestions() {
    return (dispatch) => {
        dispatch(request({}));

        try {
            questionairesService.deleteAllQuestions()
                .then(
                    () => {
                        dispatch(success());
                    },
                    (error) => {
                        dispatch(failure(error));
                    },
                );
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function request(data) { return { type: questionairesConstants.QUESTIONS_DELETE_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTIONS_DELETE_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTIONS_DELETE_FAILURE, error }; }
}