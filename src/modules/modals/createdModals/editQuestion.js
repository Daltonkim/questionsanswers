import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const EditQuestion = ({ modalID, data }) => {


    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const [, setDisabled] = useState(true)

    const dispatch = useDispatch();

    useEffect(() => {
        if ((answer !== undefined) && (question !== undefined)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [question, answer])

    useEffect(() => {
        if ((data !== undefined)) {
            const { answer, question } = data
            setAnswer(answer)
            setQuestion(question)
        }
    }, [data])

    const editQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            const obj = {
                question: question,
                answer: answer,
                uid: data !== undefined ? data.uid : 'random'
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
            <h2 data-testid="editq">Edit Question</h2>
            <div className="select-file p-10">
                <form onSubmit={() => editQuestion()} data-testid='form'>
                    <label htmlFor="question">Question</label>
                    <input required data-testid="question" value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                    <label htmlFor="answer">Answer</label>
                    <textarea required data-testid="answer" value={answer} name="answer" rows="10" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>

                    <div className="btn-group-actions site-modal__actions">
                        <button type='submit' name="submit" data-testid="submit-button" className="app__question-actions-create">Save changes</button>
                        <button className="danger" onClick={() => closeModal()}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
