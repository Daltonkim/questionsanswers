import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const DeleteQuestion = ({ modalID, data }) => {
    const dispatch = useDispatch();

    const deleteQuestion = () => {
        dispatch(questionaireActions.deleteQuestion(data));
        closeModal();
    };



    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <p>Are you sure you want to delete this question?</p>
            <div className="select-file p-10">

                <div className="btn-group-actions site-modal__actions">
                    <button  className="success" onClick={ () => deleteQuestion() } >Continue</button>
                    <button className="danger" onClick={ () => closeModal() }>Close</button>
                </div>
            </div>
        </div>
    );
};
