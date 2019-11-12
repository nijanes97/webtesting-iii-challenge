import React from 'react'
import { render } from "@testing-library/react"
import Display from './Display';

// Test away!

test('renders correctly', () => {
    render(<Display />);
});

test('open and unlocked displays with green led class', () => {
    const { getByText } = render(
        <Display />
    )
    getByText(/open/i);
    getByText(/unlocked/i);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
})

test('lock gate button disabled when gate open', () => {
    const { getByText } = render(
        <Display 
            closed={true}
        />
    )
    getByText(/closed/i);
    getByText(/unlocked/i);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
})

test('lock gate button disabled when gate open', () => {
    const { getByText } = render(
        <Display 
            closed={true}
            locked={true}
        />
    )
    getByText(/closed/i);
    getByText(/locked/i);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
})