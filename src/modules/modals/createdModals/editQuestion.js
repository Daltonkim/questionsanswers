import { memo, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Tooltip from '../../../components/tooltip';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';
 
const EditQuestion = ({ modalID, data }) => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [hasDelay, setDelay] = useState(false)
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
            const { answer, question, hasDelay } = data
            setAnswer(answer)
            setQuestion(question)
            setDelay(hasDelay)
        }
    }, [data])


    const handleCheckChange = () => {
        setDelay(!hasDelay)
    }


    const editQuestion = () => {
        if ((answer !== undefined) && (question !== undefined)) {
            const obj = {
                question: question,
                answer: answer,
                hasDelay: hasDelay,
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

    return useMemo(() => (
        <div className="site-modal">
            <h2 data-testid="editq">Edit Question</h2>
            <div className="select-file p-10">
                {console.count('counter')}
                <form onSubmit={() => editQuestion()} data-testid='form'>
                    <label htmlFor="question">Question</label>
                    <input required data-testid="question" value={question} className="app__question-qtext" onChange={(e) => setQuestion(e.target.value)} type="text" name="question"></input>
                    <label htmlFor="answer">Answer</label>
                    <textarea required data-testid="answer" value={answer} name="answer" rows="10" onChange={(e) => setAnswer(e.target.value)} className="app__question-qtextarea"></textarea>
                    <label htmlFor='hasDelay' className="checkbox">
                        <input type="checkbox" value={hasDelay} checked={hasDelay} name="hasDelay" className="app__question-delay" onChange={(e) => handleCheckChange(e.target.value)}></input>
                        <span>Add a 5 second delay <Tooltip tip="This will add a five second delay to the operation" /></span>
                    </label>
                    <div className="btn-group-actions site-modal__actions">
                        <button type='submit' name="submit" data-testid="submit-button" className="app__question-actions-create">Save changes</button>
                        <button className="danger" onClick={() => closeModal()}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    ), [question, answer, hasDelay, handleCheckChange, closeModal]);
};

EditQuestion.propTypes = {
    modalID: PropTypes.number,
    data: PropTypes.object
};

export const MemoizedEditQuestion = memo(EditQuestion)