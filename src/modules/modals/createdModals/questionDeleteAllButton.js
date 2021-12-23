import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '..';


export function QuestionDeleteAllButton() {
    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.questions);

    const deleteQuestions = () => {
        dispatch(modalActions.delete_all_questions(questions));
    };

    return (
        <button className="app__question-actions-remove" theme="primary" onClick={() => deleteQuestions()}>
            Delete All
        </button>
    );
}
