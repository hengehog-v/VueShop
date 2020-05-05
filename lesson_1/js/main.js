let product = [
    {productImage: './img/sneakers_1.jpg',
    productName: 'Кроссовки NIKE Air Max 97 SE',
    productPrice: '7990'
    },
    {productImage: './img/sneakers_2.jpg',
    productName: 'Кроссовки NIKE Air Max 95 SE Premium',
    productPrice: '9990'
    },
    {productImage: './img/sneakers_3.jpg',
    productName: 'Кроссовки NIKE Air Max 95 Premium',
    productPrice: '7990'
    },
    {productImage: './img/sneakers_4.jpg',
    productName: 'Кроссовки NIKE Air Max 97',
    productPrice: '9990'
    },
    {productImage: './img/sneakers_5.jpg',
    productName: 'Кроссовки NIKE Air Max 95/OG',
    productPrice: '8390'
    },
    {productImage: './img/sneakers_6.jpg',
    productName: 'Кроссовки ASICS Gel-Lyte GoreTex',
    productPrice: '4950'
    },
    {productImage: './img/sneakers_7.jpg',
    productName: 'Кроссовки adidas Originals Ozweego',
    productPrice: '5500'
    },
    {productImage: './img/sneakers_8.jpg',
    productName: 'Кроссовки NIKE Air Huarache Ultra',
    productPrice: '7990'
    },
    {productImage: './img/sneakers_9.jpg',
    productName: 'Кроссовки ASICS Gel-Kayano 5 OG',
    productPrice: '7500'
    }
]

const template = (item) => {
    return `<div class="product-item">
                <img src="${item.productImage}" alt="product" class="product-image" width="200" height="180">
                <span class="product-name">${item.productName}</span>
                <span class="price">${item.productPrice}</span>
                <button class="button">Добавить</button></div>`
}

function createPriductItem(arr){
    let arrElementsBlock = arr.map((item) => {
        return template(item)}
    )

    document.querySelector('main').innerHTML = arrElementsBlock.join('');
}
createPriductItem(product)
    