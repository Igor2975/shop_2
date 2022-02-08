class ProductList {
  constructor(container = '.products-list') {
    this.container = container;
    this.arrProducts = [];
    this._addProducts();
    this.render();
  }

  _addProducts() {
    this.arrGoods = [
       { id: 1, title: 'Notebook', price: 2000, img:'images/Notebook.jpg' },
       { id: 2, title: 'Mouse', price: 20, img: 'images/Mouse.jpg' },
       { id: 3, title: 'Keyboard', price: 200, img:'images/Keyboard.jpg' },
       { id: 4, title: 'Gamepad', price: 50, img:'images/Gamepad.jpg' },
    ];
  }
  sumProducts() {
    let sum = 0;
    this.arrGoods.forEach((item) => sum += item.price);
    console.log(sum);
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.arrGoods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
      //block.innerHTML += item.render();
    }
  }
}  
    class ProductItem{
      constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
      }
      render(){
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


class Cart{
  addGoods() {
    
  }
  removeGoods() {

  }
  changeGoods() {

  }
}
class CartElement{
  render() {
    
  }
}







