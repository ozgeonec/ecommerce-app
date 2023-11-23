import React from "react";
import {DefaultButton, Wrapper, BgImage, Description, BrandName} from './Product.styles.tsx';
import {IProduct} from "../../../lib/Types/index";
import useProductHover from "../../../hooks/useProductHover";
import {useShoppingCart} from "../../../../context/cart.context";


interface Props {
    children: IProduct
}

const Product: React.FC<Props> = ({children}) => {

    const {isHovered, handleMouseEnter, handleMouseLeave} = useProductHover();
    const {addToCart} = useShoppingCart();

    return (
        <Wrapper
            key={children.id}
        >
            <BgImage
                style={{backgroundImage: `url(${children.image})`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered && (
                    <Description>
                        <p>
                            {children.description}
                        </p>
                    </Description>
                )}
            </BgImage>
            <BrandName>{children.brand} - {children.name}</BrandName>
            <DefaultButton onClick={() => addToCart(children)}>Add To Cart - ${children.price}</DefaultButton>
        </Wrapper>
    );
}

export default Product;