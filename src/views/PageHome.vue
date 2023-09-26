<template>
  <div class="page">
    <div class="page__content-wrapper">
      <div class="todo">
        <todo-create @add-todo="addTodo" />
        <div
          v-if="todos.length"
          class="todo__list"
        >
          <todo-item
            v-for="(todo, index) in todos"
            :id="index"
            :key="todo.id"
            :todo="todo"
            @remove-todo="removeTodo"
          >
          </todo-item>
        </div>
        <div v-else>Nothing to complete</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import TodoCreate from '@/components/TodoCreate.vue';
  import TodoItem from '@/components/TodoItem.vue';
  import {ref} from 'vue';
  import {getAllTodos} from '@/api/apiTodos';

  const todos = ref([]);

  const getTodos = async () => {
    try {
      todos.value = (await getAllTodos()).data.todos;
    } catch (e) {
      console.log(e);
    }
  };

  getTodos();

  const addTodo = (item) => {
    todos.value.push(item.value);
  };

  const removeTodo = (item) => {
    todos.value.splice(todos.value.indexOf(item), 1);
  };
</script>

<style lang="scss" scoped>
  .todo {
    max-width: 500px;
    margin: 50px auto;

    &__list {
      max-width: 500px;
      width: 100%;
    }
  }
</style>
