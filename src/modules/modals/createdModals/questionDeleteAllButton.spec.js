import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import {QuestionDeleteAllButton} from './questionDeleteAllButton';
const middlewares = [thunk]

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore(middlewares);
    let store;

    it('test delete all', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <QuestionDeleteAllButton />
            </Provider>
        );
        const button = screen.getByText('Delete All')

        fireEvent.click(button)
        expect(button).toBeInTheDocument()

    });
   
});