const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue({
  el: '#app',
  data: {
      catalogUrl: '/catalogData.json',
      imgProduct: 'https://via.placeholder.com/200x150',
      products: [],
      userSearch: '',
      filtered: [],
      cartUrl: '/getBasket.json',
      imgCart: 'https://via.placeholder.com/50x100',
      cartItems: [],
      showCart: false
  },
  methods: {
      filter(){
        const regexp = new RegExp(this.userSearch, 'i');
       this.filtered = this.products.filter(elem => regexp.test(elem.product_name));
      },
      getJson(url){
          return fetch(url)
              .then(result => result.json())
              .catch(error => {
                  console.log(error);
              })
      },
      addProduct(product){
          console.log(product.id_product);
      }
  },
  mounted(){
     this.getJson(`${API + this.catalogUrl}`)
         .then(data => {
             for(let item of data){
                 this.products.push(item);
                 this.filtered.push(item);
             }
         });
      this.getJson(`${API + this.cartUrl}`)
          .then(data => {
              for (let item of data.contents) {
                  this.cartItems.push(item);
              }
          });
  }
})
// class ProductList {
//   constructor(container = '.products-list') {
//     this.container = container;
//     this.arrProducts = [];

//     this.getArrProducts()
//       .then(data => {
//         this.arrProducts = data;
//         this.render()
//       })
//   }
 
//   getArrProducts() {
//     return fetch(`${API}/catalogData.json`)
//       .then(result => result.json())
      
//       .catch(err => {
//         alert(err.message)
//       })
    
//   }
  
  


//   render() {
//     const block = document.querySelector(this.container);
//     for (let product of this.arrProducts) {
//       const item = new ProductItem(product);

//       block.insertAdjacentHTML("beforeend", item.render());
//       //block.innerHTML += item.render();
//     }
    
   
//   }
  
// }
// class ProductItem {
//   constructor(product) {
//     this.title = product.product_name;
//     this.id = product.id;
//     this.price = product.price;
//     this.img = product.img;
//   }
//   render() {
//     return `<div class="product-item">
//              <img class="products-item-img" src="${this.img}">
//              <h3 class products-item-title>${this.title}</h3>
//              <p class="products-item-price">${this.price}</p>
//              <button class="products-item-button" type="button">Добавить</button>
//          </div>`
//   }
// }

// let list = new ProductList();



// class Cart {
//   constructor(container = ".cart-content") {
//     this.container = container;
//     this.cartGoods = [];
//     this.clickCart();
//     this.getCartItem()
//       .then(data => {
//         this.cartGoods = data.contents;
//         this.render();
//       })
//   }
//   getCartItem() {
//     return fetch(`${API}/getBasket.json`)
//       .then(arr => arr.json())

//   }
//   render() {
//     const cartBlock = document.querySelector(this.container)
//     for (let product of this.cartGoods) {
//       const cartItem = new CartElement();
//       cartBlock.insertAdjacentHTML('beforeend', cartItem.render(product))
//     }
//   }
//   clickCart() {
//     document.querySelector('.cart-button').addEventListener('click', () => {
//       document.querySelector(this.container).classList.toggle('invisible')
//     })

//   }
//   addGoods() {
//     document.querySelector('.products-item-button').addEventListener('click', () => {
//   document.querySelector(this.quantity) = `${this.quantity + 1}`
// })
//   }
//   removeGoods() {

//   }
//   changeGoods() {

//   }
// }
// class CartElement {


//   render(product) {
//     return `<div class='cart-item' data-id='${product.id_product}'>
//       <div class='cart-left'>
//         <p class='cart-name'>${product.product_name}</p>
//         <p class='cart-quantity'>Количество: ${product.quantity}</p>
//         <p class='cart-price'>Цена: ${product.price}</p>
//       </div>
//       <div class='cart-right'>
//          <p class='cart-sum'>Сумма: ${product.quantity * product.price}</p>
//          <button class="cart-delete">&times</button>
//       </div>
    
//     </div>`
//   }
// }
// let cart = new Cart()