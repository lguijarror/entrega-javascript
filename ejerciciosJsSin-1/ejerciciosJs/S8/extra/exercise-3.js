const getOrders = async () => {
    const response = await fetch('http://localhost:3000/orders');

    const results = await response.json();

    return results.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
};

const getProducts = async (index) => {

        const response = await fetch('http://localhost:3000/products/' + index);

        const results = await response.json();
    

    return results;
};

const drawOrders = async (orders) => {

    let div = document.createElement('div');

    for (let order of orders) {

        let divOrder = document.createElement('div');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');

        let idOrder = document.createTextNode('Pedido ' + order.id);
        let dateOrder = document.createTextNode('Fecha: ' + order.date);

        divOrder.appendChild(h3);
        divOrder.appendChild(h5);
 
        h3.appendChild(idOrder);
        h5.appendChild(dateOrder);

        for (let product of order.products) {
            const pr = await getProducts(product.productId);

            let divProduct = document.createElement('div');
            let productName = document.createElement('p');
            let productQuantity = document.createElement('p');

            let name = document.createTextNode('Nombre: ' + pr.name);
            let quantity = document.createTextNode('Cantidad: ' + product.quantity);

            productName.appendChild(name);
            productQuantity.appendChild(quantity);
            divProduct.appendChild(productName);
            divProduct.appendChild(productQuantity);
            divOrder.appendChild(divProduct);
        }

        div.appendChild(divOrder);
    }

    document.body.appendChild(div);
};

const init = async () => {
    const orders = await getOrders();
    drawOrders(orders);
};

init();