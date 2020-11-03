import products from '~/assets/data/products.json'

export const state = () => ({
  products,
})

export const getters = {
  products: (state) => state.products,
}
