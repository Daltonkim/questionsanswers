import { useEffect, useState } from "react";

const Home = () => {
    const [questions, setQuestions] = useState([
        {
            question: 'how to add a question',
            answer: 'by following the below'
        }
    ])
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const [isDisabled, setDisabled] = useState(true)

    useEffect(() => {
        console.log(question, answer)
        if ((answer !== undefined) && (question !== undefined)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [question, answer])

    const addQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            let ques = questions
            console.log(answer, question)
            const obj = {
                question: question,
                answer: answer
            }
            ques.push(obj)
            setQuestions(ques)
            setAnswer(undefined)
            setQuestion(undefined)
        }
    }

    const sortQuestions = () => {
        if (questions.length > 0) {
            let sortit = questions
            sortit.sort((a, b) => a.question.toLowerCase() < b.question.toLowerCase() ? -1 : a.question.toLowerCase() > b.question.toLowerCase() ? 1 : a.question.toLowerCase() < b.question.toLowerCase() ? -1 : a.question.toLowerCase() > b.question.toLowerCase() ? 1 : 0)
            setQuestions(sortit)
        }
    }
    const removeQuestions = () => {
        if (questions.length > 0) {
            setQuestions([])
        }
    }

    const deleteQuestion = (i) => {
        console.log(i)
        let r = questions.slice(0, i).concat(questions.slice(i + 1));
        setQuestions(r)
        console.log(r)
    }
    const editQuestion = (item, i) => {
        console.log(item, i)
        setQuestions(r)
    }
    return (
        <div className="app__question">
            {
                questions.map((item, i) => {
                    return (
                        <div key={i} className="app__question-wrapper">
                            <p className="app__question-text">{item.question}?</p>
                            <p className="app__question-answer">{item.answer}</p>
                            <div className="app__question-inlineactions">
                                <span><button onClick={() => editQuestion(item, i)}>Edit</button><button onClick={() => deleteQuestion(i)}>Delete</button></span>
                            </div>
                        </div>
                    )
                })
            }
            <div className="app__question-actions">
                <span><button onClick={() => sortQuestions()} className="app__question-actions-sort">Sort questions</button></span><span><button onClick={() => removeQuestions()} className="app__question-actions-remove">Remove questions</button></span>
            </div>
            <div className="app__question-create">
                <label htmlFor="question">Question</label>
                <input value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                <label htmlFor="answer">Answer</label>
                <textarea value={answer} name="answer" rows="10" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>
                <button type="submit" disabled={isDisabled} onClick={() => addQuestion()} className="app__question-actions-create">Add question</button>
            </div>
        </div>
    )
}

export default Home;