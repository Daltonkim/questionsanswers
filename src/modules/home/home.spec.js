import { render } from '@testing-library/react';
import Home from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const middlewares = [thunk]

const questions = [{
    question: 'hello',
    answer: 'answer'
},
{
    question: 'hello',
    answer: 'answer'
}
]
describe('With React Testing Library', () => {
    const initialState = { questions: questions };
    const mockStore = configureStore(middlewares);
    let store;

    it("Home", () => {
        store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Home questions={questions} />
            </Provider>
        );
    });
});