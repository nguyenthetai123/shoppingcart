const data=[
    {
        id: '0',
        img: 'images/oppA5s.jpg',
        name: 'oppA5s',
        price: 100,
        save: 10,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
     {
        id: '1',
        img: 'images/realmeNarzo.jpg',
        name: 'realmeNarzo',
        price: 120,
        save: 12,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
      {
        id: '2',
        img: 'images/samgalaxyM01.jpg',
        name: 'samgalaxyM01',
        price: 130,
        save: 12,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
       {
        id: '3',
        img: 'images/samGalaxyM21.jpg',
        name: 'samGalaxyM21',
        price: 140,
        save: 14,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
        {
        id: '4',
        img: 'images/redminote9.jpg',
        name: 'redminote9',
        price: 150,
        save: 15,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
         {
        id: '5',
        img: 'images/vivo.jpg',
        name: 'vivo',
        price: 160,
        save: 16,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
          {
        id: '6',
        img: 'images/realme C11.jpg',
        name: 'realme C11',
        price: 170,
        save: 17,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
           {
        id: '7',
        img: 'images/nokia.jpeg',
        name: 'nokia',
        price: 180,
        save: 18,
        delivery: 'In 3 -4 days',
        IteminCart:false
    },
            {
        id: '8',
        img: 'images/iphone1.jpeg',
        name: 'iphone1',
        price: 190,
        save: 19,
        delivery: 'In 3 -4 days',
        IteminCart:false
    }
];
let CartList = [];//array to store
var i;
var detail = document.getElementsByClassName('cart-item');
var detailImg = document.getElementById('details-img');
var detailTitle = document.getElementById('detail-title');
var detailPrice = document.getElementById('detail-price');
var yousave = document.getElementById('you-save');
var detailPage = document.getElementById('details-page');
var back = document.getElementById('back');

back.addEventListener('click', refreshPage);//click event to back  home page
var addToCart = document.querySelectorAll('#add-to-cart');
var cart = document.getElementById('card');

cart.addEventListener('click', displayCart);//click event to display cart

var carts = document.getElementById('carts');
carts.addEventListener('click', () => addToCart(getID));//click event to add to cart

var getID;
var home = document.getElementById('logo');
home.addEventListener('click',hideCart);//click event to hide cart