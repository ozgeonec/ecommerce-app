/** @jest-environment jsdom */
import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product, {Props} from "./Product";
import {mockData} from "../../../../../mock-data-for-test";


const DEFAULT_PROPS: Props = {
    product: mockData[0]
};


test('shows the correct name', async () => {
    render(await Product({params: DEFAULT_PROPS}))
    expect(screen.getByText(DEFAULT_PROPS.product.name)).toBeInTheDocument();
});

describe('fires callback on button click', () => {
    test('add button', async () => {
        render(await Product({params: DEFAULT_PROPS}));
        userEvent.click(screen.getByRole('button', {name: /\\+/i}));
        expect(DEFAULT_PROPS.handleAdd).toBeCalled();
        expect(DEFAULT_PROPS.handleAdd).toBeCalledTimes(1);
        expect(DEFAULT_PROPS.handleAdd).toBeCalledWith(DEFAULT_PROPS.product.id);
    });
});