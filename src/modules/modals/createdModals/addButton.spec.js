import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AddButton from './addButton';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Alt "add new question"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <AddButton />
            </Provider>
        );
        const button = screen.getByAltText('add new question')
        fireEvent.click(button)
    });
});