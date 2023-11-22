'use client'
import React, {useState} from "react";
import {
    CartLogo,
    LogoWrapper,
    Quantity,
    ModalTitle,
    CartMainWrapper,
    CartModalWrapper,
    ModalImg,
    ModalText,
    Line,
    InnerModal,
    ModalDetails,
    RemoveButton,
    ModalBottom,
    ModalBottomInner
} from './CartModal.styles.tsx';
import {useShoppingCart} from "../../../../context/cart.context";

interface Props {

}

const CartModal: React.FC<Props> = ({}) => {

    const {cart, removeFromCart, getCartTotal, getQuantity} = useShoppingCart();

    let totalQuantity = getQuantity();
    let cartTotalPrice = getCartTotal();

    const [isHovered, setISHovered] = useState(false);

    return (
        <CartMainWrapper>
            <LogoWrapper onMouseOver={() => setISHovered(true)}>
                <Quantity>{totalQuantity === 0 ? null : totalQuantity}</Quantity>
                <CartLogo src="assets/shopping-cart.png" alt="shopping cart"/>
            </LogoWrapper>
            {isHovered &&
            <CartModalWrapper onMouseLeave={() => setISHovered(false)}>
                <ModalTitle>Your Cart</ModalTitle>
                {cart.map((item) => {
                    return (
                        <InnerModal key={item.product.id}>
                            <ModalDetails>
                                <ModalImg src={item.product.image} alt={item.product.name}/>
                                <ModalText>
                                    <h4>{item.product.name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>${item.product.price}</p>
                                </ModalText>
                            </ModalDetails>
                            <RemoveButton onClick={() => removeFromCart(item.product.id)}>Remove</RemoveButton>
                            <Line></Line>
                        </InnerModal>
                    );
                })}

                <ModalBottom>
                    <ModalBottomInner>
                        <p>Subtotal: </p>
                        <p>${cartTotalPrice}</p>
                    </ModalBottomInner>
                    <ModalBottomInner>
                        <p>Shipping: </p>
                        <span>Calculated at the last step</span>
                    </ModalBottomInner>
                    <Line></Line>
                    <ModalBottomInner>
                        <p>Total</p>
                        <p>${cartTotalPrice}</p>
                    </ModalBottomInner>
                </ModalBottom>
            </CartModalWrapper>
            }
        </CartMainWrapper>

    );
}


export default CartModal;