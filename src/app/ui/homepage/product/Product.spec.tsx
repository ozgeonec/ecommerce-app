/** @jest-environment jsdom */
import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product, {Props} from "./Product";
import {mockData} from "../../../../../mock-data-for-test";
import { Suspense } from 'react'

const DEFAULT_PROPS: Props = {
    product: mockData[0]
};



it('should render without crashing', async () => {
    render(await Product({params: DEFAULT_PROPS}))
});
