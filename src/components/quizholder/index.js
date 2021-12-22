import { useDispatch } from "react-redux"
import { questionaireActions } from "../../modules/home/redux/_actions"

const QuizHolder = ({
    item, id
}) => {
    console.log(item)
    const dispatch = useDispatch()

    const editQuestion = (item, i) => {
        console.log(item, i)
    }

    const deleteQuestion = (id) => {
        console.log(id)
        dispatch(questionaireActions.deleteQuestion(id));
    }

    return (
        <div key={id} className="app__question-wrapper">
            <p className="app__question-text">{item.question}?</p>
            <p className="app__question-answer">{item.answer}</p>
            <div className="app__question-inlineactions">
                <span><button onClick={() => editQuestion(item, id)}>Edit</button><button onClick={() => deleteQuestion(id)}>Delete</button></span>
            </div>
        </div>
    )
}

export default QuizHolder;
