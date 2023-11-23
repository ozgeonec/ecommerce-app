import React from "react";
import {DefaultButton, Wrapper, BgImage, Description, BrandName} from './Product.styles.tsx';
import {IProduct} from "../../../lib/Types/index";
import useProductHover from "../../../hooks/useProductHover";
import {useShoppingCart} from "../../../../context/cart.context";


interface Props {
    product: IProduct
}

const Product: React.FC<Props> = ({product}) => {

    const {isHovered, handleMouseEnter, handleMouseLeave} = useProductHover();
    const {addToCart} = useShoppingCart();

    return (
        <Wrapper
            key={product.id}
        >
            <BgImage
                style={{backgroundImage: `url(${product.image})`}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered && (
                    <Description>
                        <p>
                            {product.description}
                        </p>
                    </Description>
                )}
            </BgImage>
            <BrandName>{product.brand} - {product.name}</BrandName>
            <DefaultButton onClick={() => addToCart(product)}>Add To Cart - ${product.price}</DefaultButton>
        </Wrapper>
    );
}

export default Product;