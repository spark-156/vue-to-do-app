<template>
  <div id="center">
    <form v-on:submit.prevent="addTodo">
      <label id="title">Add todo item 
        <br />
        <input type="text" v-model="newTodo">
      </label>
      <Button :buttontype="'primary'" :type="'submit'">Add</button>
    </form>

    <br />

    <FlexBox :flowDirection="'column'">
      <TodoItem 
        v-for="(todo, index) in todos" 
        :key="todo.id" 
        :title="todo.title" 
        @remove="todos.splice(index, 1)" 
        @toggleIsDoneValue="todos[index].isDone = !todos[index].isDone"
        :isDoneValue="todo.isDone"
      />
    </FlexBox>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css';
import FlexBox from './components/FlexBox.vue'
import TodoItem from './components/TodoItem.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    FlexBox,
    Button,
  },
  data() {
    return {
      todos: [],
      nextTodoId: 0,
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ title: this.newTodo, id: this.nextTodoId++, isDone: false })
      this.newTodo = ''
    }
  },
  watch: {
    todos: {
      handler: function(newValue) {
        console.log(newValue)
      },
      deep: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Playfair+Display&display=swap');

:root {
  --ldb-fonts-title: 'Playfair Display';
  --ldb-fonts-default: Karla;
  --ldb-lengths-1: 8px;
  --ldb-lengths-2: 16px;
  --ldb-lengths-3: 24px;
  --ldb-lengths-4: 32px;
  --ldb-lengths-5: 40px;
  --ldb-lengths-6: 48px;
  --ldb-lengths-7: 56px;
  --ldb-lengths-8: 64px;
  --ldb-lengths-9: 72px;
  --ldb-lengths-10: 80px;
  --ldb-lengths-100: 800px;

  --ldb-colors-blue: #06f;
  --ldb-colors-black: #191414;
  --ldb-colors-white: #fff;
}

#app {
  font-family: Karla, sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: var(--ldb-colors-black);
  /* font-size: var(--ldb-lengths-3); */
  
  margin-top: var(--ldb-lengths-8);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped>
  #center {
      max-width: 100%;
  }

  #title {
    font-family: var(--ldb-fonts-title);
    font-size: var(--ldb-lengths-4);
  }

  button {
    margin-left: var(--ldb-lengths-2);
  }

  input {
    padding: var(--ldb-lengths-1);
    border-radius: var(--ldb-lengths-1);
    border: 1px solid var(--ldb-colors-black);
  }
</style>