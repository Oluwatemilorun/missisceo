export const state = () => ({
  categories: [
    { text: "Vehicle", icon: "mdi-car-side"},
    { text: "Electronics", icon: "mdi-monitor"},
    { text: "Mobile Phones", icon: "mdi-cellphone"},
    { text: "Furnitures", icon: "mdi-chair-rolling"},
    { text: "Fashion", icon: "mdi-tshirt-crew"},
    { text: "Real Estate", icon: "mdi-home-city-outline"},
    { text: "Animals", icon: "mdi-cat"},
    { text: "Education", icon: "mdi-school-outline"},
    { text: "Laptops & PCs", icon: "mdi-laptop"},
    { text: "Adult Services", icon: "mdi-car"},
    { text: "Programing", icon: "mdi-code-json"},
    { text: "Other Services", icon: "mdi-cctv"}
  ]
});

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  }
};

export const getters = {
  getCategories(state) {
    return state.categories;
  }
};
