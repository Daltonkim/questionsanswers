import { useDispatch } from 'react-redux';
import { modalActions } from '..';


export function DeleteQuestionButton({ id }) {
    const dispatch = useDispatch();

    const deleteQuestionnaire = () => {
        dispatch(modalActions.delete_question(id));
    };

    return (
        <button theme="primary" onClick={() => deleteQuestionnaire()}>
            Delete Question
        </button>
    );
}
