export const state = () => ({
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
  
});

export const getters = {
  links(state) {
    return state.links;
  }
};
