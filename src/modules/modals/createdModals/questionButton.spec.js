import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import {DeleteQuestionButton} from './questionButton';
const middlewares = [thunk]

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore(middlewares);
    let store;

    it('test image', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <DeleteQuestionButton />
            </Provider>
        );
        const textElement = screen.getByAltText('delete new question')
        const button = screen.getByTestId('buttondelete')

        fireEvent.click(button)
        expect(textElement).toBeInTheDocument()

    });
   
});