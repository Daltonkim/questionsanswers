import { render, screen,
    //  waitFor, 
    //  within, 
     fireEvent, 
    //  cleanup
     } from '@testing-library/react';
// import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { EditQuestion } from './editQuestion';
//TODO
//submission of form needs to implemented, got a small error here
//figuring it out

const middlewares = [thunk]

describe('With React Testing Library', () => {

    let store;

    const initialState = { output: 10 };
    const mockStore = configureStore(middlewares);

    // const onSubmit = jest.fn();


    // beforeEach(() => {
    //     onSubmit.mockClear();
    //     store = mockStore(initialState);

    //     render(
    //         <Provider store={store}>
    //             <EditQuestion onSubmit={onSubmit} />
    //         </Provider>
    //     );
    // });


    it('Basic text and button', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <EditQuestion />
            </Provider>
        );
        const text = screen.getByTestId('editq')
        const button = screen.getByText('Close')
        expect(text).toBeInTheDocument()
        fireEvent.click(button)
    });

    // it('onSubmit is called when all fields pass validation', async () => {
    //     user.type(findQuestion(), 'Question');
    //     user.type(findAnswer(), 'Answer');

    //     clickSubmitButton()

    //     await waitFor(() => {
    //         expect(onSubmit).toHaveBeenCalledWith({
    //             question: 'Question',
    //             answer: 'Answer',
    //         });
    //     });

    //     expect(onSubmit).toHaveBeenCalledTimes(1);
    // });
});


// const clickSubmitButton = async () => {
//     user.click(screen.getByTestId('submit-button'))
// }

// function findQuestion() {
//     return screen.getByTestId('question', { name: /question/i });
// }

// function findAnswer() {
//     console.log(screen.getByTestId('answer', { name: /answer/i }));
//     return screen.getByTestId('answer', { name: /answer/i, value: 'Answer' });
// }

