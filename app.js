const app = Vue.createApp({
  // data, functions
  // template: '<h2>I am the template</h2>'
  data() {
    return {
      todos: [{title: 'Water plants', id: 0}, {title: 'work-out', id: 1}],
      newToDo: '',
      nextToDoId: 2,
    }
  },
  methods: {
    addToDo() {
      this.todos.push({ title: this.newToDo, id: this.nextToDoId++ })
      this.newToDo = ''
    },
  }
})

app.mount('#app')
