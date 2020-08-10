export const state = () => ({
  articles: require('@/data/articles.json')
})

export const getters = {
  articles(state) {
    for (const article of state.articles){
      if(!article.slug){
        article.slug = article.title.replace(/(\s\&\s)|\s|(\,\s)/g, '-').toLowerCase();
      } else {
        article.slug = article.slug.toLowerCase();
      }
    }
    return state.articles;
  }
}