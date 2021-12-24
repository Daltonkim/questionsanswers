import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('With React Testing Library', () => {
    it("Test loader", () => {
        render(
            <Loading />
        );
        const textElement = screen.getByText('Loading...')
        expect(textElement).toBeInTheDocument();
    });
});