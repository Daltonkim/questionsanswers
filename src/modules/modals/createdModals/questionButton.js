import { useDispatch } from 'react-redux';
import { modalActions } from '..';
import remove from '../../../assets/images/remove.png'


export function DeleteQuestionButton({ id }) {
    const dispatch = useDispatch();

    const deleteQuestionnaire = () => {
        dispatch(modalActions.delete_question(id));
    };

    return (
        <button data-testid="buttondelete" className='app__deletebutton' onClick={() => deleteQuestionnaire()}>
            <img src={remove} alt="delete new question"></img>
        </button>
    );
}
