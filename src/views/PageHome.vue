<template>
  <div class="page">
    <div class="page__content-wrapper">
      <div class="todo">
        <todo-create @addTodo="addTodo" />
        <div
          v-if="todos.length > 0"
          class="todo__list"
        >
          <todo-item
            v-for="(todo, index) in todos"
            :id="index"
            :key="todo.id"
            :todo="todo"
            @removeTodo="removeTodo"
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
    await getAllTodos().then((response) => (todos.value = response.data?.todos));
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
