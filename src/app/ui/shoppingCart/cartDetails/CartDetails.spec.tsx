/** @jest-environment jsdom */
import React from 'react';
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartDetails, {Props} from "./CartDetails";


const DEFAULT_PROPS: Props = {
};


it('should render without crashing', async () => {
    render(await CartDetails({params: DEFAULT_PROPS}))
});
