import React, {useState} from "react";
import {DefaultButton, Wrapper, BgImage, Description, BrandName} from './Product.styles.tsx';
import {IProduct} from "../../../lib/Types/index";
import useProductHover from "../../../hooks/useProductHover";
import {useShoppingCart} from "../../../../context/cart.context";
import * as palette from '../../../variables';


interface Props {
    product: IProduct
}

const Product: React.FC<Props> = ({product}) => {

    const {isHovered, handleMouseEnter, handleMouseLeave} = useProductHover();
    const {addToCart} = useShoppingCart();
    const [color, setColor] = useState('#f5832d');

    setTimeout(() => {
        if (color === '#74c62c') {
            setColor('#f5832d')
        }

    }, 3000);

    return (
        <Wrapper>
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
            <DefaultButton color={color} onClick={() => {
                addToCart(product);
                setColor('#74c62c');
            }}>
                {color === '#74c62c' ? 'Added' : 'Add To Cart'} - ${product.price}
            </DefaultButton>
        </Wrapper>
    );
}

export default Product;