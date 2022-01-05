import { isEmpty } from 'lodash';
import { toast } from 'react-toastify'
import { questionairesConstants } from './_constants';
import { questionairesService } from './_service';

export const questionaireActions = {
    addQuestion,
    editQuestion,
    getAllQuestions,
    deleteQuestion,
    deleteAllQuestions,
};
//add question
function addQuestion(question) {
    return (dispatch) => {
        dispatch(request({}));

        try {

            if (isEmpty(question)) {
                throw new Error('Comment cannot be empty');
            }

            questionairesService.addQuestion(question)
                .then(
                    () => {
                        dispatch(success(question));
                        toast.success('Question has been added successfull')
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

//edit question

function editQuestion(question) {
    return (dispatch) => {
        dispatch(request({}));

        try {
            if (isEmpty(question)) {
                throw new Error('Question cannot be empty');
            }

            questionairesService.editQuestion(question)
                .then(
                    () => {
                        toast.success('Question has been edited successfull')
                        dispatch(success(question));
                    },
                    (error) => {
                        dispatch(failure(error));
                        toast.error('error')

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

//get all question

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

//delete one question
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
                        toast.success('Question deleted successfull')
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

//delete all questions

function deleteAllQuestions() {
    return (dispatch) => {
        dispatch(request({}));

        try {
            questionairesService.deleteAllQuestions()
                .then(
                    () => {
                        dispatch(success());
                        toast.success('All Questions have been deleted successfull')

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