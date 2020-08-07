export const state = () => ({
  articles: require('@/data/articles.json'),
  drawer: false,
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
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Bee-Beauty Shop',
      href: '/shop',
    },
    {
      text: 'Contact',
      href: '/contact',
    }
  ],
  categories: [
    'Life',
    'Business',
    'Marriage',
    'Faith',
    'Beauty',
    'Motherhood',
    'Video',
  ]
});

export const getters = {
  links: state => {
    return state.links
  },
  categories: state => {
    return state.categories
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
  }
};
