import {useEffect} from 'react';
import {IProduct} from "../lib/Types/index";

const useProductScroll = (
    {
        loadMore,
        displayCount,
        products,
        isLoading,
    }: {
        loadMore: () => void;
        displayCount: number;
        products: IProduct[];
        isLoading: boolean;
    }
) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const handleScroll = () => {
            if (
                (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100) &&
                (displayCount < products.length) &&
                !isLoading
            ) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [displayCount, products, isLoading]);
};

export default useProductScroll;
