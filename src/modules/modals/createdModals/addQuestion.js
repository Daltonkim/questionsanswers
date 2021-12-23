import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';
import { v4 as uuidv4 } from 'uuid';

export const AddQuestion = ({ modalID, data }) => {

    const [question, setQuestion] = useState(data?.question)
    const [answer, setAnswer] = useState(data?.answer)
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

    //add questions
    const addQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            const obj = {
                question: question,
                answer: answer,
                uid: uuidv4()
            }
            dispatch(questionaireActions.addQuestion(obj));

            setAnswer('')
            setQuestion('')

            closeModal();

        }
    }


    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <h2>Add Question</h2>
            <div className="select-file p-10">
                <form>
                    <label htmlFor="question">Question</label>
                    <input required value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                    <label htmlFor="answer">Answer</label>
                    <textarea required value={answer} name="answer" rows="6" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>
                    <div className="btn-group-actions site-modal__actions">
                        <button  type='submit' className="app__question-actions-create" onClick={() => addQuestion()} >Add Question</button>
                        <button  className="danger" onClick={() => closeModal()}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
