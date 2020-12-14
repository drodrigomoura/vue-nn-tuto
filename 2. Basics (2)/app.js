const app = Vue.createApp({
  data(){
    return {
      showBooks: true,
      title: 'The final Empire',
      author: 'Rodrigo',
      age: 28,
      x: 0,
      y: 0,
    }
  },
  methods: {

    changeTitle(title){
      this.title = title
    },
    toggleShowBooks(){
      
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data){
      console.log(e, e.type);
      if(data){
        console.log(data);
      }
    },
    handleMousemove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')