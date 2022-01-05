import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { modalActions } from '..';
import edit from '../../../assets/images/edit.png'

export function EditButton({ item }) {
    const dispatch = useDispatch();

    const editQuestion = () => {
        dispatch(modalActions.edit_question(item));
    };

    return (
        <button data-testid="buttondelete" className='app__editbutton' onClick={() => editQuestion()}>
            <img src={edit} alt="edit question"></img>
        </button>
    );
}

export const MemoizedEditButton = memo(EditButton)