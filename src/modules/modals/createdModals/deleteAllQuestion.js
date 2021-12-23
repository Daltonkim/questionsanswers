import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const DeleteAllQuestions = ({ modalID, data }) => {
    const dispatch = useDispatch();
    const deleteAllQuestion = () => {
        dispatch(questionaireActions.deleteAllQuestions(data));
        closeModal();
    };

    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <p>Are you sure you want to delete all items?</p>
            <div className="select-file p-10">
                <div className="btn-group-actions site-modal__actions">
                    <button className="danger" onClick={() => deleteAllQuestion()} >Continue</button>
                    <button className="success" onClick={() => closeModal()}>Close</button>
                </div>
            </div>
        </div>
    );
};
