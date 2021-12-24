
export const questionairesService = {
    addQuestion,
    editQuestion,
    deleteQuestion,
    getAllQuestions,
    deleteAllQuestions
};
const delay = (0.5 + Math.random() * 2) * 1000;

function addQuestion(question) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (question) {
                resolve();
                return question;
            } else {
                reject(new Error("Invalid"));
            }
        }, delay);
    });
}

function getAllQuestions(questions) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (questions) {
                resolve();
                return questions;
            } else {
                reject(new Error("Invalid"));
            }
        }, delay);
    });
}

function editQuestion(question, i) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (question) {
                resolve();
                return question;
            } else {
                reject(new Error("Invalid"));
            }
        }, delay);
    });
}

function deleteQuestion(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (id) {
                resolve();
                return id;
            } else {
                reject(new Error("Invalid"));
            }
        }, delay);
    });
}

function deleteAllQuestions() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
                resolve();
                reject(new Error("Invalid"));
        }, delay);
    });
}

