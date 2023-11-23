'use client'
import {createContext, useState, useEffect, useContext} from 'react';
import {ICart, IProduct} from "../app/lib/Types/index";

export interface ShoppingCartContextProps {
    cart: ICart[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: number) => void;
    getQuantity: () => number;
    getCartTotal: () => number;
}

export const CartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

export const useShoppingCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('');
    }
    return context;
};

export const ShoppingCartProvider: React.FC = ({children}) => {
    //const [cart, setCart] = useState<ICart[]>(((typeof window !== 'undefined') && localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart') as string) : []);
    const [cart, setCart] = useState<ICart[]>([]);

    /* useEffect(() => {
         const storedCart = localStorage.getItem('cart');
         if (storedCart) {
             setCart(JSON.parse(storedCart));
         }
     }, []);*/


    const addToCart = (product: IProduct) => {
        const existingItem = cart.find((item) => item.product.id === product.id);
        console.log('hhh', product)

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.product.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                )
            );

        } else {
            setCart((prevCart) => [...prevCart, {product, quantity: 1}]);
        }
        console.log('updated', cart)
    };


    const removeFromCart = (productId: number) => {
        const isItemInCart = cart.find((cartItem) => cartItem.product.id === productId);
        console.log(isItemInCart)

        if (isItemInCart.quantity === 1) {
            setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));

        } else {
            setCart((prevCart) => prevCart.map((item) => (item.product.id === productId) ?
                {...item, quantity: item.quantity - 1}
                : item
                )
            );
        }
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const getQuantity = () => {
        return cart.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0);
    }
    /*
        useEffect(() => {
            const data = localStorage.getItem('cart');
            if (data) {
                setCart(JSON.parse(data));
            }
        }, []);


        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Cart state updated:', cart);
        }, [cart]);*/

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getCartTotal, getQuantity}}>
            {children}
        </CartContext.Provider>
    );
};