import { modalConstants } from "./_constants";

export const modalActions = {
    add_question,
    edit_question,
    delete_question,
    delete_all_questions,
    hideModal,
};

function add_question(content) {
    return { type: modalConstants.ADD_QUESTION, content };
}

function edit_question(content) {
    return { type: modalConstants.EDIT_QUESTION, content };
}

function delete_question(content) {
    return { type: modalConstants.DELETE_QUESTION, content };
}
function delete_all_questions(content) {
    return { type: modalConstants.DELETE_ALL_QUESTIONS, content };
}
function hideModal(content) {
    return { type: modalConstants.HIDE_MODAL, content };
}

