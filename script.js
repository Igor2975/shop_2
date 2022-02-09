const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductList {
  constructor(container = '.products-list') {
    this.container = container;
    this.arrProducts = [];

    this.getArrProducts()
      .then(data => {
        this.arrProducts = data;
        this.render()
      })
  }
  getArrProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(err => {
        alert(err.message)
      });
  }


  render() {
    const block = document.querySelector(this.container);
    for (let product of this.arrProducts) {
      const item = new ProductItem(product);

      block.insertAdjacentHTML("beforeend", item.render());
      //block.innerHTML += item.render();

    }
  }
  sumProducts() {
    let sum = 0;
    this.arrProducts.forEach((item) => sum += item.price);
    console.log(sum);

  }
}
class ProductItem {
  constructor(product) {
    this.title = product.product_name;
    this.id = product.id;
    this.price = product.price;
    this.img = product.img;
  }
  render() {
    return `<div class="product-item">
             <img class="products-item-img" src="${this.img}">
             <h3 class products-item-title>${this.title}</h3>
             <p class="products-item-price">${this.price}</p>
             <button class="products-item-button">Добавить</button>
         </div>`
  }
}

let list = new ProductList();
list.sumProducts()


class Cart {
  constructor(container = ".cart-content") {
    this.container = container;
    this.cartGoods = [];
    this.clickCart();
    this.getCartItem()
      .then(data => {
        this.cartGoods = data.contents;
        this.render();
      })
  }
  getCartItem() {
    return fetch(`${API}/getBasket.json`)
      .then(arr => arr.json())

  }
  render() {
    const cartBlock = document.querySelector(this.container)
    for (let product of this.cartGoods) {
      const cartItem = new CartElement();
      cartBlock.insertAdjacentHTML('beforeend', cartItem.render(product))
    }
  }
  clickCart() {
    document.querySelector('.cart-button').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible')
    })

  }
  addGoods() {

  }
  removeGoods() {

  }
  changeGoods() {

  }
}
class CartElement {
  // constructor(product) {
  //   this.name = product.product_name;
  //   this.price = product.price;
  //   this.id = product.id_product;
  //   this.quantity = product.quantity
  // }

  render(product) {
    return `<div class='cart-item' data-id='${product.id_product}'>
      <div class='cart-left'>
        <p class='cart-name'>${product.product_name}</p>
        <p class='cart-quantity'>Количество: ${product.quantity}</p>
        <p class='cart-price'>Цена: ${product.price}</p>
      </div>
      <div class='cart-right'>
         <p class='cart-sum'>Сумма: ${product.quantity * product.price}</p>
         <button class="cart-delete">&times</button>
      </div>
    
    </div>`
  }
}
let cart = new Cart()