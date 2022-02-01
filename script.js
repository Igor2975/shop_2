const products = [
    { title: 'Notebook', price: 2000,img:src='images/Notebook.jpg' },
    { title: 'Mouse', price: 20,img:src='images/Mouse.jpg' },
    { title: 'Keyboard', price: 200,img:src='images/Keyboard.jpg' },
    { title: 'Gamepad', price: 50,img:src='images/Gamepad.jpg' },
  ];
  
  const renderProduct = ({title = '', price = 0, img}) => `
    <div class="products-item">
    <img class="products-item-img" width ='180' height ='160' src=${img} alt="#" />
    <h3 class="products-item-title">${title}</h3>
    <p class="products-item-price">${price}</p>
    <button class="products-item-button" type="button">Добавить</button>
    </div>
  `
  
  const renderPage = () => {
    let productList = products.map(item => renderProduct(item));
    document.querySelector('.products-list').innerHTML = productList.join('');
  }
  renderPage();