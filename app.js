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
  beforeMount() {
    console.log("beforeMount")
    const storedTodos = JSON.parse(window.localStorage.getItem('todos'))
    const storedNextToDoId = window.localStorage.getItem('nextToDoId')
    if ((storedTodos && storedNextToDoId) !== null) {
      this.todos = storedTodos
      this.nextToDoId = Number(storedNextToDoId)
    }
  },
  methods: {
    addToDo() {
      this.todos.push({ title: this.newToDo, id: this.nextToDoId++ })
      this.newToDo = ''
      this.setStorage()
    },
    removeToDo(index) {
      this.todos.splice(index, 1)
      this.setStorage()
    },
    setStorage() {
      window.localStorage.setItem('todos', JSON.stringify(this.todos))
      window.localStorage.setItem('nextToDoId', this.nextToDoId)
    }
  }
})

app.mount('#app')
