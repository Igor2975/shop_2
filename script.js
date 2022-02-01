const goods = [
    { title: 'Notebook', price: 2000,img:src='images/Notebook.jpg' },
    { title: 'Mouse', price: 20,img:src='images/Mouse.jpg' },
    { title: 'Keyboard', price: 200,img:src='images/Keyboard.jpg' },
    { title: 'Gamepad', price: 50,img:src='images/Gamepad.jpg' },
  ];
  
  const renderGoodsItem = ({title = '', price = 0, img}) => `
    <div class="goods-item">
    <img class="goods-item-img" width ='180' height ='160' src=${img} alt="#" />
    <h3 class="goods-item-title">${title}</h3>
    <p class="goods-item-price">${price}</p>
    <button class="goods-item-button" type="button">Добавить</button>
    </div>
  `
  
  const renderGoodsList = () => {
    let goodsList = goods.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  renderGoodsList();