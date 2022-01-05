import { memo } from "react"
import { MemoizedEditButton } from "../../modules/modals/createdModals/editButton"
import { DeleteQuestionButton } from "../../modules/modals/createdModals/questionButton"

export const QuizHolder = ({ position, item, id }) => {
    const { question, answer } = item
    return (
            <div className="flip">
                        {console.count('counter')}
                <div className="front">
                    <h3>Question {Number(position)}</h3>
                    <p className="app__question-text">{question}</p>
                </div>
                <div className="back">
                    <h3>Answer</h3>
                    <p className="app__question-answer">{answer}</p>
                </div>
                <div className="app__question-inlineactions">
                    <MemoizedEditButton item={item} />
                    <DeleteQuestionButton id={id} />
                </div>
            </div>
    )
}

export const MemoizedQuizHolder = memo(QuizHolder);
