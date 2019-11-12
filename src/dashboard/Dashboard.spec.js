import React from 'react'
import { render } from "@testing-library/react"
import Dashboard from "./Dashboard"

// Test away!

test('renders correctly', () => {
    const { getByTestId } = render(<Dashboard />);

    getByTestId(/controls/i);
    getByTestId(/display/i);
});