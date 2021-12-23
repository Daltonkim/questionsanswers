import { EditButton } from "../../modules/modals/createdModals/editButton"
import { DeleteQuestionButton } from "../../modules/modals/createdModals/questionButton"

const QuizHolder = ({ position, item, id }) => {
    console.log(position)
    return (
        <>
            {/* <div key={id} className="app__question-wrapper">
                <p className="app__question-text">{item.question}?</p>
                <p className="app__question-answer">{item.answer}</p>
                <div className="app__question-inlineactions">
                    <span>
                        <EditButton item={item} />
                        <DeleteQuestionButton id={id} />
                    </span>
                </div>
            </div> */}

            <div class="flip">
                <div class="front">
                    {console.log(position)}
                    <h3>Question {Number(position)}</h3>
                    <p className="app__question-text">{item.question}?</p>
                </div>
                <div class="back">
                    <h3>Answer</h3>
                    <p className="app__question-answer">{item.answer}</p>
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
