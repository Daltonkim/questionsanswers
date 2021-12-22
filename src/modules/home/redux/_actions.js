import { isEmpty } from 'lodash';
import { questionairesConstants } from './_constants';
import { questionairesService } from './_service';

export const questionaireActions = {
    addQuestion,
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
                    (data) => {
                        console.log(question)
                        console.log(data)
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

function getAllQuestions(questions) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            questionairesService.getAllQuestions(questions)
                .then(
                    (data) => {
                        console.log(data)
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
                    (data) => {
                        console.log(data)
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
function deleteAllQuestions(questions) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            questionairesService.deleteAllQuestions(questions)
                .then(
                    (data) => {
                        console.log(data)
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

    function request(data) { return { type: questionairesConstants.QUESTIONS_DELETE_REQUEST, data }; }
    function success(data) { return { type: questionairesConstants.QUESTIONS_DELETE_SUCCESS, data }; }
    function failure(error) { return { type: questionairesConstants.QUESTIONS_DELETE_FAILURE, error }; }
}