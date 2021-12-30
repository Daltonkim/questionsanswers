import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';
import { v4 as uuidv4 } from 'uuid';

export const AddQuestion = ({ modalID }) => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [hasDelay, setDelay] = useState(false)
    const [, setDisabled] = useState(true)

    const dispatch = useDispatch();
    //disable submit button
    useEffect(() => {
        if ((answer !== undefined) && (question !== undefined)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [question, answer])


    const handleCheckChange = () => {
        setDelay(!hasDelay)
    }

    //add questions
    const addQuestion = () => {
        if ((answer !== '') && (question !== '')) {
            const obj = {
                question: question,
                answer: answer,
                hasDelay: hasDelay,
                uid: uuidv4()
            }
            dispatch(questionaireActions.addQuestion(obj));
            closeModal();
        }
    }


    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <h2 data-testid='addq'>Add Question</h2>
            <div className="select-file p-10">
                <form onSubmit={() => addQuestion()}>
                    <label htmlFor="question">Question</label>
                    <input required data-testid="question" value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                    <label htmlFor="answer">Answer</label>
                    <textarea data-testid="answer" required value={answer} name="answer" rows="6" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>
                    <label htmlFor='hasDelay' className="checkbox">
                        <input type="checkbox" value={hasDelay} name="hasDelay" className="app__question-delay" onChange={(e) => handleCheckChange(e.target.value)}></input>
                        <span>Add a 5 second delay</span>
                    </label>
                    <div className="btn-group-actions site-modal__actions">
                        <button type='submit' data-testid="submit-button" className="app__question-actions-create" >Add Question</button>
                        <button className="danger" onClick={() => closeModal()}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
