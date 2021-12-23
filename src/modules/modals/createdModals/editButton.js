import { useDispatch } from 'react-redux';
import { modalActions } from '..';
import edit from '../../../assets/images/edit.png'

export function EditButton({ item }) {
    const dispatch = useDispatch();

    const editQuestion = () => {
        dispatch(modalActions.edit_question(item));
    };

    return (
        <button className='app__editbutton' onClick={() => editQuestion()}>
           <img src={edit} alt="add new question"></img>
        </button>
    );
}
