import { render, screen } from '@testing-library/react';
import Tooltip from './index';

describe('With React Testing Library', () => {
    it("Test tooltip", () => {
        render(
            <Tooltip tip='example tip' />
        );
        const textElement = screen.getByTestId('id')
        expect(textElement).toBeInTheDocument();
    });
});