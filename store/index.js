export const state = () => ({
  articles: require('@/data/articles.json'),
  drawer: false,
  myDialog: false,
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Events & Speakers',
      href: '/events',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Beauty Shop',
      href: '/shop',
    },
    {
      text: 'Contact',
      href: '/contact',
    }
  ]
});

export const getters = {
  links: state => {
    return state.links
  },
  articles: state => {
    for (const article of state.articles){
      if(!article.slug){
        article.slug = article.title.replace(/(\s\&\s)|\s|(\,\s)/g, '-').toLowerCase()
      } else {
        article.slug = article.slug.toLowerCase()
      }
    }
    return state.articles
  },
  products: state => {
    return state.productData
  }
};

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
  openDialog: state => (state.myDialog = !state.myDialog),
  closeDialog (state) {
    return state.myDialog = false;
  }
};
