import { useDispatch } from 'react-redux';
import { modalActions } from '..';

export function EditButton({ item }) {
    const dispatch = useDispatch();

    const editQuestion = () => {
        dispatch(modalActions.edit_question(item));
    };

    return (
        <button theme="primary" onClick={() => editQuestion()}>
            Edit
        </button>
    );
}
