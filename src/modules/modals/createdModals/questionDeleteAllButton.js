import { useDispatch } from 'react-redux';
import { modalActions } from '..';


export function QuestionDeleteAllButton({ questions }) {
    const dispatch = useDispatch();

    const deleteQuestions = () => {
        dispatch(modalActions.delete_all_questions(questions));
    };

    return (
        <button className="app__question-actions-remove" theme="primary" onClick={() => deleteQuestions()}>
            Delete All
        </button>
    );
}
