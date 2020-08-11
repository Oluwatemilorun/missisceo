export const state = () => ({
  products: require('@/data/products.json')
})

export const getters = {
  products(state) {
    return state.products;
  }
}