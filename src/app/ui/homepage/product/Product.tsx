import React, {useState} from "react";
import {DefaultButton, Wrapper, BgImage, Description, BrandName} from './Product.styles.tsx';
import {IProduct} from "../../../lib/Types/index";
import useProductHover from "../../../hooks/useProductHover";
import {useShoppingCart} from "../../../../context/cart.context";
import * as palette from '../../../variables';

export interface Props {
    product: IProduct
}

const Product: React.FC<Props> = ({product}) => {


    const {isHovered, handleMouseEnter, handleMouseLeave} = useProductHover();
    const {addToCart} = useShoppingCart();

    const orangeColor: string = palette.buttonColor;
    const greenColor: string = palette.buttonColorAdded;

    const [color, setColor] = useState<string>(orangeColor);

    setTimeout(() => {
        if (color === greenColor) {
            setColor(orangeColor)
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
            <BrandName>{product.name}</BrandName>
            <DefaultButton color={color} onClick={() => {
                addToCart(product);
                setColor(greenColor);
            }}>
                {color === greenColor ? 'Added' : 'Add To Cart'} - ${product.price}
            </DefaultButton>
        </Wrapper>
    );
}

export default Product;