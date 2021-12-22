import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const DeleteAllQuestions = ({ modalID, data }) => {
    const dispatch = useDispatch();
console.log(data)
    const deleteAllQuestion = () => {
        dispatch(questionaireActions.deleteAllQuestions(data));
        closeModal();
    };

    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <h1>Delete Item</h1>
            <div className="select-file p-10">

                <div className="btn-group-actions site-modal__actions">
                    <button theme="primary" className="thin mr-2" onClick={ () => deleteAllQuestion() } >Continue</button>
                    <button theme="secondary" className="thin delete" onClick={ () => closeModal() }>Close</button>
                </div>
            </div>
        </div>
    );
};
