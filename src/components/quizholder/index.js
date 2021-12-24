import { EditButton } from "../../modules/modals/createdModals/editButton"
import { DeleteQuestionButton } from "../../modules/modals/createdModals/questionButton"

const QuizHolder = ({ position, item, id }) => {
    const { question, answer } = item
    return (
        <>
            <div className="flip">
                <div className="front">
                    <h3>Question {Number(position)}</h3>
                    <p className="app__question-text">{question}</p>
                </div>
                <div className="back">
                    <h3>Answer</h3>
                    <p className="app__question-answer">{answer}</p>
                </div>
                <div className="app__question-inlineactions">
                    <EditButton item={item} />
                    <DeleteQuestionButton id={id} />
                </div>
            </div>
        </>
    )
}

export default QuizHolder;
