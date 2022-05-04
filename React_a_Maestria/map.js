const products = [
    {name: 'Tv', price: 1000, category: 'Eletro'},
    {name: 'T-shirt', price: 20, category: 'Clothes'},
    {name: 'Cellphone', price: 1200, category: 'Eletro'},
    {name: 'Meat', price: 14, category: 'Food'}
];

//Map => Calls a defined callback function on each element of an array, and returns an array that contains the results. (Update an array)

products.map((product) => {
    if(product.category ==  'Eletro'){
        product.onSale = true;
    }
    else{
        product.onSale = false;
    }
})

console.log(products)