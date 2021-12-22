import { useDispatch } from 'react-redux';
import { modalActions } from '..';

export function AddButton() {
    const dispatch = useDispatch();

    const addQuestion = () => {
        dispatch(modalActions.add_question());
    };

    return (
        <button theme="primary" onClick={() => addQuestion()}>
            Add New Question
        </button>
    );
}
