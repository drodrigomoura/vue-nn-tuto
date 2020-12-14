const app = Vue.createApp({
  data(){
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpeg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpeg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ]
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    toggleFav(book){
      // this.books.forEach(el => {
      //   if(el.title === book.title){
      //     el.isFav = !el.isFav
      //   }
      // })
      book.isFav = !book.isFav
    }
  }
})

app.mount('#app')