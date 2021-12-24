import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QuizHolder from './index';

const item = {
  question: 'hello',
  answer: 'answer'
}

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('Get text', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <QuizHolder item={item} />
      </Provider>
    )
    screen.getByText((content, node) => {
      const hasText = node => node.textContent === "Answer";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child)
      );
  
      return nodeHasText && childrenDontHaveText;
    });
  });

});