export const state = () => ({
  categories: [
    'Life',
    'Business',
    'Marriage',
    'Faith',
    'Beauty',
    'Motherhood',
    'Video',
  ],
})

export const getters = {
  categories: (state) => state.categories,
}
