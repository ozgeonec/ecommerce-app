import { useProductState, useProductFetch, useProductScroll, useProductSearch } from './index';
import {IProduct} from "../lib/Types/index";

interface UseProductDataProps {
    products: IProduct[];
    visibleProducts: IProduct[];
    displayCount: number;
    isLoading: boolean;
    loadMore: () => void;
    handleSearch: (query: string) => void;
}

const useHomepage = (): UseProductDataProps => {
    const {
        products,
        visibleProducts,
        displayCount,
        isLoading,
        setProducts,
        setVisibleProducts,
        setDisplayCount,
        setIsLoading,
    } = useProductState();

    const { loadMore } = useProductFetch({
        setProducts,
        setVisibleProducts,
        setDisplayCount,
        setIsLoading,
        products,
        displayCount,
    });

    useProductScroll({ loadMore, displayCount, products, isLoading });

    const { handleSearch } = useProductSearch({
        setVisibleProducts,
        products,
        displayCount,
    });

    return {
        products,
        visibleProducts,
        displayCount,
        isLoading,
        loadMore,
        handleSearch,
    };
};

export default useHomepage;
