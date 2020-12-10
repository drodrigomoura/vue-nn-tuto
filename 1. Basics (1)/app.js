const app = Vue.createApp({
  //data, functions
  // template: '<h2>I am a template</h2>'

  data(){
    return {
      showBooks: true,
      title: 'The final Empire',
      author: 'Rodrigo',
      age: 28
    }
  },
  methods: {
    // changeTitle(){
    //   // console.log('click');
    //   this.title = 'Something Else'
    // }
    changeTitle(title){
      this.title = title
    },
    toggleShowBooks(){
      
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')