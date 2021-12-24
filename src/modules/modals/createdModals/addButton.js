import { useDispatch } from 'react-redux';
import { modalActions } from '..';
import addsign from '../../../assets/images/plus.png'

const AddButton = () => {
    const dispatch = useDispatch();

    const addQuestion = () => {
        dispatch(modalActions.add_question());
    };

    return (
        <button className='app__addbutton' onClick={() => addQuestion()}>
            <img src={addsign} alt="add new question"></img>
        </button>
    );
}

export default AddButton