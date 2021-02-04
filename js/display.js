var products = {
    men: [
        {
            name: "Adidas Men-1",
            price: 180,
            inCart: 0,
            image: "./media/adidas-man-1.jpg"
        },
        {
            name: "Adidas Men-2",
            price: 160,
            inCart: 0,
            image: "./media/adidas-man-2.jpg"
        },
        {
            name: "Jordan Men-1",
            price: 250,
            inCart: 0,
            image: "./media/jordan-man-1.jpg"
        },
        {
            name: "Jordan Men-2",
            price: 180,
            inCart: 0,
            image: "./media/jordan-man-2.jpg"
        },
        {
            name: "Nike Men-1",
            price: 120,
            inCart: 0,
            image: "./media/nike-man-1.jpg"
        },
        {
            name: "Nike Men-2",
            price: 140,
            inCart: 0,
            image: "./media/nike-man-2.jpg"
        },
        {
            name: "Puma Men-1",
            price: 150,
            inCart: 0,
            image: "./media/puma-man-1.jpg"
        },
        {
            name: "Puma Men-2",
            price: 100,
            inCart: 0,
            image: "./media/puma-man-2.jpg"
        },
        {
            name: "Vans Men-1",
            price: 130,
            inCart: 0,
            image: "./media/vans-man-1.jpg"
        },
        {
            name: "Vans Men-2",
            price: 115,
            inCart: 0,
            image: "./media/vans-man-2.jpg"
        },
        {
            name: "skechers Men-1",
            price: 100,
            inCart: 0,
            image: "./media/skechers-man-1.jpg"
        },
        {
            name: "skechers Men-2",
            price: 110,
            inCart: 0,
            image: "./media/skechers-man-2.jpg"
        }
    ],
    women: [
        {
            name: "Adidas Men-1",
            price: 180,
            inCart: 0,
            image: "./media/adidas-woman-1.jpg"
        },
        {
            name: "Adidas Men-2",
            price: 160,
            inCart: 0,
            image: "./media/adidas-woman-2.jpg"
        },
        {
            name: "Jordan Men-1",
            price: 250,
            inCart: 0,
            image: "./media/jordan-woman-1.jpg"
        },
        {
            name: "Jordan Men-2",
            price: 180,
            inCart: 0,
            image: "./media/jordan-woman-2.jpg"
        },
        {
            name: "Nike Men-1",
            price: 120,
            inCart: 0,
            image: "./media/nike-woman-1.jpg"
        },
        {
            name: "Nike Men-2",
            price: 140,
            inCart: 0,
            image: "./media/nike-woman-2.jpg"
        },
        {
            name: "Puma Men-1",
            price: 150,
            inCart: 0,
            image: "./media/puma-woman-1.jpg"
        },
        {
            name: "Puma Men-2",
            price: 100,
            inCart: 0,
            image: "./media/puma-woman-2.jpg"
        },
        {
            name: "Vans Men-1",
            price: 130,
            inCart: 0,
            image: "./media/vans-woman-1.jpg"
        },
        {
            name: "Vans Men-2",
            price: 115,
            inCart: 0,
            image: "./media/vans-woman-2.jpg"
        },
        {
            name: "skechers Men-1",
            price: 100,
            inCart: 0,
            image: "./media/skecher-woman-1.jpg"
        },
        {
            name: "skechers Men-2",
            price: 110,
            inCart: 0,
            image: "./media/skecher-woman-2.jpg"
        }
    ],
    'sales': {

    }
}

//display products
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('type')) {
    var type = type = urlParams.get('type');
} else {
    type = 'Men';
}
let productContainer = document.querySelector("#products-container");
if (productContainer){
    if (products[type].length>0){
        Object.values(products[type]).map(item => {
            productContainer.innerHTML += `
            <div class= 'block'>
            <img src='${item.image}' height="250px" width="250px" style="">
            <h3>${item.name}</h3>
            <h2>$${item.price}</h2>
            <h4>All size available</h4>
            <a id="man">ADD TO SHOPPING BASKET</a>
            </div>`
        });
        let blocks = document.querySelectorAll(".block");
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('click', () => {
                url='product.html?type='+type+'&id='+i
                var win = window.open(url, '_blank');
                win.focus();
            })
          }
    }else{
        productContainer.innerHTML += `No products found`
    }
    
}
