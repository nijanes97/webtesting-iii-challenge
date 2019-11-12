import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import Controls from './Controls';

// Test away!

test('renders correctly', () => {
    render(<Controls />);
});

test('lock gate button disabled when gate open', () => {
    const { getByText } = render(
        <Controls
            closed={false}
        />
    )
    expect(getByText(/lock gate/i)).toHaveProperty('disabled');
})

test('open gate button disabled when gate locked', () => {
    const { getByText } = render(
        <Controls
            closed={true}
            locked={true}
        />
    )
    expect(getByText(/open gate/i)).toHaveProperty('disabled');
})

test('toggleClose called on button press', () => {
    const setToggleClosed = jest.fn();
    const { getByText } = render(
        <Controls
            toggleClosed={setToggleClosed}
        />
    )
    fireEvent.click(getByText(/close gate/i));
    expect(setToggleClosed).toHaveBeenCalled();
})

test('toggleClose called on button press', () => {
    const setToggleClosed = jest.fn();
    const { getByText } = render(
        <Controls
            closed={true}
            toggleClosed={setToggleClosed}
        />
    )
    fireEvent.click(getByText(/open gate/i));
    expect(setToggleClosed).toHaveBeenCalled();
})

test('toggleLock called on button press', () => {
    const setToggleLocked = jest.fn();
    const { getByText } = render(
        <Controls
            closed={true}
            toggleLocked={setToggleLocked}
        />
    )
    fireEvent.click(getByText(/lock gate/i));
    expect(setToggleLocked).toHaveBeenCalled();
})

test('toggleLock called on button press', () => {
    const setToggleLocked = jest.fn();
    const { getByText } = render(
        <Controls
            locked={true}
            closed={true}
            toggleLocked={setToggleLocked}
        />
    )
    fireEvent.click(getByText(/unlock gate/i));
    expect(setToggleLocked).toHaveBeenCalled();
})