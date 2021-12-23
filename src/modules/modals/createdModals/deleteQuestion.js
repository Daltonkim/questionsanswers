import { useDispatch } from 'react-redux';
import { questionaireActions } from '../../home/redux/_actions';
import { modalActions } from '../../modals';

export const DeleteQuestion = ({ modalID, data }) => {
    const dispatch = useDispatch();

console.log(data)

    const deleteQuestion = () => {
        dispatch(questionaireActions.deleteQuestion(data));
        closeModal();
    };



    const closeModal = () => {
        dispatch(modalActions.hideModal(modalID));
    };

    return (
        <div className="site-modal">
            <h2>Delete Question</h2>
            <div className="select-file p-10">

                <div className="btn-group-actions site-modal__actions">
                    <button theme="primary" className="thin mr-2" onClick={ () => deleteQuestion() } >Continue</button>
                    <button theme="secondary" className="thin delete" onClick={ () => closeModal() }>Close</button>
                </div>
            </div>
        </div>
    );
};
