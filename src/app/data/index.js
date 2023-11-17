async function getProducts() {
    const response = await fetch("https://api.github.com/gists/ccada69eed493842070a0b8945a0a771");
    const data = await response.json();
    const fileName = 'products.json';
    console.log(data.files[fileName].content);

    return data.files[fileName].content;
}
