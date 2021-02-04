let carts = document.querySelectorAll("#man");

// let products = [
//   {
//     name:"Adidas Men-1",
//     price:180,
//     inCart:0
//   },
//   {
//     name:"Adidas Men-2",
//     price:160,
//     inCart:0
//   },
//   {
//     name:"Jordan Men-1",
//     price:250,
//     inCart:0
//   },
//   {
//     name:"Jordan Men-2",
//     price:180,
//     inCart:0
//   },
//   {
//     name:"Nike Men-1",
//     price:120,
//     inCart:0
//   },
//   {
//     name:"Nike Men-2",
//     price:140,
//     inCart:0
//   },
//   {
//     name:"Puma Men-1",
//     price:150,
//     inCart:0
//   },
//   {
//     name:"Puma Men-2",
//     price:100,
//     inCart:0
//   },
//   {
//     name:"Vans Men-1",
//     price:130,
//     inCart:0
//   },
//   {
//     name:"Vans Men-2",
//     price:115,
//     inCart:0
//   },
//   {
//     name:"skechers Men-1",
//     price:100,
//     inCart:0
//   },
//   {
//     name:"skechers Men-2",
//     price:110,
//     inCart:0
//   }
// ];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[type][i]);
    totalCost(products[type][i]);
    alert('Product added to cart!!')
  })
}

function onLoadCartNo() {
  let productno = localStorage.getItem('cartNumbers');

  if (productno) {
    document.querySelector('.cart span').innerText = productno;
  }
}

function cartNumbers(product) {
  //console.log("product",product);
  let productno = localStorage.getItem('cartNumbers');

  productno = parseInt(productno);

  if (productno) {
    localStorage.setItem('cartNumbers', productno + 1);
    document.querySelector('.cart span').innerText = productno + 1;
  }
  else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').innerText = 1;
  }

  setItem(product);
}

function setItem(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems, [product.name]: product
      }
    }
    cartItems[product.name].inCart += 1;
  }

  else {
    product.inCart = 1;

    cartItems = {
      [product.name]: product
    }
  }


  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);

    localStorage.setItem("totalCost", cartCost + product.price);
  }
  else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");

  cartItems = JSON.parse(cartItems);

  let productcontainer = document.querySelector("#cart_table");

  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);

  if (cartItems && productcontainer) {

    var row = ''
    Object.values(cartItems).map(item => {
      row += `<tr>

        <td>
        <ion-icon name="close-circle-outline"></ion-icon>
       
        <img src = "${item.image}" width="100px" height="100px">
        </td>
        <td>
        <span>${item.name}</span>
        </td>

        <td class = "">$${item.price},00</td>
        <td class = "">
        <ion-icon name="caret-back-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="caret-forward-outline"></ion-icon>
        </td>
        <td class = "">
          $${item.inCart * item.price},00
        </td>
        </tr>
        `
    });
    productcontainer.innerHTML += row
    row = ''
    row = `
      <tr>
      <td>
      </td>
        <td>
        </td>
        <td>
        </td>
        <td><b>Basket Total</b>
        </td>
        <td><b>$${cartCost},00</b>
        </td>
      </tr>
      `
    productcontainer.innerHTML += row
    row = ''
    row = `
      <tr>
      <td>
      </td>
        <td>
        </td>
        <td><button onclick='window.location.href="cart.html"'>Checkout</button>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      `
    productcontainer.innerHTML += row
  }
}

onLoadCartNo();
displayCart();
