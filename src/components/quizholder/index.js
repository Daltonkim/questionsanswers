import { EditButton } from "../../modules/modals/createdModals/editButton"
import { DeleteQuestionButton } from "../../modules/modals/createdModals/questionButton"

const QuizHolder = ({ item, id }) => {
    return (
        <div key={id} className="app__question-wrapper">
            <p className="app__question-text">{item.question}?</p>
            <p className="app__question-answer">{item.answer}</p>
            <div className="app__question-inlineactions">
                <span>
                    <EditButton item={item} />
                    <DeleteQuestionButton id={id} />
                </span>
            </div>
        </div>
    )
}

export default QuizHolder;
