'use client'
import React, {useState} from "react";
import {
    CartLogo,
    LogoWrapper,
    Quantity,
    CartMainWrapper,
    CartModalWrapper
} from './CartModal.styles';
import Link from 'next/link'
import {useShoppingCart} from "../../../../context/cart.context";
import CartDetails from "../cartDetails/CartDetails";

interface Props {

}

const CartModal: React.FC<Props> = ({}) => {

    const [isHovered, setISHovered] = useState(false);
    const {getQuantity} = useShoppingCart();

    let totalQuantity = getQuantity();

    return (
        <CartMainWrapper>
            <Link href="/cart">
                <LogoWrapper onMouseOver={() => setISHovered(true)}>
                    <Quantity>{totalQuantity === 0 ? null : totalQuantity}</Quantity>
                    <CartLogo src="assets/cart-icon.svg" alt="shopping cart"/>
                </LogoWrapper>
            </Link>
            {isHovered &&
            <CartModalWrapper onMouseLeave={() => setISHovered(false)}>
                <CartDetails/>
            </CartModalWrapper>
            }
        </CartMainWrapper>

    );
}


export default CartModal;