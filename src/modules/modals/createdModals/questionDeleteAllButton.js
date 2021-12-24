import { useDispatch } from 'react-redux';
import { modalActions } from '..';


export function QuestionDeleteAllButton() {
    const dispatch = useDispatch();

    const deleteQuestions = () => {
        dispatch(modalActions.delete_all_questions());
    };

    return (
        <button className="app__question-actions-remove" onClick={() => deleteQuestions()}>
            Delete All
        </button>
    );
}
