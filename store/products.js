export const state = () => ({
  items: require('@/data/products.json'),
  cart: [
    { 
      "id": "9d436e98",
      "name": "Apple MacBook 10 Pro 1TB SSD, 16GB RAM",
      "category": "Laptop & PCs",
      "price": 120000 ,
      "rating": 4, 
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "img": "/img/categories/gadget-repair.jpeg"
    },
    { 
      "id": "9d436a50",
      "name": "Neatly Handmade Unisex Crochet Sweaters",
      "category": "Fashion",
      "price": 3000 ,
      "rating": 3, 
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "img": "/img/categories/hair-dresser.jpeg"
    }
  ]
});

export const getters = {
  cartCount: state => {
    return state.cart.length
  }
}

export const mutations = {}