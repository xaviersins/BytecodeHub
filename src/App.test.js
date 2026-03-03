// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BytecodeHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BytecodeHub/i);
    expect(titleElement).toBeInTheDocument();
});
