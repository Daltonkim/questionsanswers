import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import {DeleteAllQuestions} from './deleteAllQuestion';
const middlewares = [thunk]

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore(middlewares);
    let store;

    it('test text', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <DeleteAllQuestions />
            </Provider>
        );
        const textElement = screen.getByText('Are you sure you want to delete all items?')
        expect(textElement).toBeInTheDocument()

    });
    it('test button continue', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <DeleteAllQuestions />
            </Provider>
        );
        const textElement = screen.getByText('Continue')
        fireEvent.click(textElement)
    });
    it('test close', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <DeleteAllQuestions />
            </Provider>
        );
        const textElement = screen.getByText('Close')
        fireEvent.click(textElement)
    });
});