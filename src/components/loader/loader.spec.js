import { render, screen } from '@testing-library/react';
import { LoadingView } from './Loading';

describe('With React Testing Library', () => {
    it("Test loader", () => {
        render(
            <LoadingView />
        );
        const textElement = screen.getByText('Loading...')
        expect(textElement).toBeInTheDocument();
    });
});