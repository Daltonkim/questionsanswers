import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { EditButton } from './editButton';
const middlewares = [thunk]

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore(middlewares);
    let store;

    it('test image', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <EditButton />
            </Provider>
        );
        const textElement = screen.getByAltText('edit question')
        const button = screen.getByTestId('buttondelete')

        fireEvent.click(button)
        expect(textElement).toBeInTheDocument()

    });

});