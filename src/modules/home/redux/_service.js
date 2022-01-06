
export const questionairesService = {
    addQuestion,
    editQuestion,
    deleteQuestion,
    getAllQuestions,
    deleteAllQuestions
};
const delay = 5000;

function addQuestion(question) {
    const { hasDelay } = question

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (question) {
                console.log(question)
                resolve(question);
            } else {
                reject(new Error("Invalid"));
            }
        }, (hasDelay ? delay : 0));
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

function editQuestion(question) {

    const { hasDelay } = question

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (question) {
                resolve();
                return question;
            } else {
                reject(new Error("Invalid"));
            }
        }, (hasDelay ? delay : 0));
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

