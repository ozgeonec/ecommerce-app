import {IProduct} from "../lib/Types/index";

const useProductSearch = ({
                              setVisibleProducts,
                              products,
                              displayCount,
                          }: {
    setVisibleProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
    products: IProduct[];
    displayCount: number;
}) => {
    const handleSearch = (query: string) => {
        if (query.trim() === '') {
            setVisibleProducts(products.slice(0, displayCount));
        } else {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setVisibleProducts(filtered);
        }
    };

    return {
        handleSearch,
    };
};

export default useProductSearch;
