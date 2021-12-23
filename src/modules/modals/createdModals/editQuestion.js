import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const EditQuestion = ({ modalID, data }) => {


    const [question, setQuestion] = useState(data?.question)
    const [answer, setAnswer] = useState(data?.answer)
    const [, setDisabled] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        if ((answer !== undefined) && (question !== undefined)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [question, answer])

    const editQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            const obj = {
                question: question,
                answer: answer,
                uid: data.uid
            }
            dispatch(questionaireActions.editQuestion(obj));

            setAnswer('')
            setQuestion('')
        }
        closeModal();
    };

    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <h2>Edit Question</h2>
            <div className="select-file p-10">
                <form>
                <label htmlFor="question">Question</label>
                <input required value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                <label htmlFor="answer">Answer</label>
                <textarea required value={answer} name="answer" rows="10" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>

                <div className="btn-group-actions site-modal__actions">
                    <button  type='submit' className="app__question-actions-create" onClick={() => editQuestion()} >Save changes</button>
                    <button  className="danger" onClick={() => closeModal()}>Close</button>
                </div>
                </form>
            </div>
        </div>
    );
};
