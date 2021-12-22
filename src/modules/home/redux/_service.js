
export const questionairesService = {
    addQuestion,
    editQuestion,
    deleteQuestion,
    getAllQuestions,
    deleteAllQuestions
};
const delay = (0.5 + Math.random() * 2) * 1000;

function addQuestion(question) {
    console.log(question)
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
    console.log(questions)
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
    return question;
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

function deleteAllQuestions(questions) {
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
