import {IProduct} from "../Types/index";

export const getProducts = () => {
    return new Promise<IProduct[]>(async (resolve, reject) => {
        try {
            const response = await fetch("https://api.github.com/gists/ccada69eed493842070a0b8945a0a771");

            const data = await response.json();
            const fileName = 'products.json';
            let content = JSON.parse(data.files[fileName].content);

            resolve(content);

        } catch (error) {
            reject(error);
        }
    });
};