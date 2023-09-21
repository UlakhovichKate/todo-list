<template>
  <div class="page">
    <div class="page__content-wrapper">
      <todo-input @addTodo="addTodo" />
      <todo-list
        :todo-items="todoItems"
        @removeTodo="removeTodo"
      />
    </div>
  </div>
</template>

<script setup>
  import TodoInput from '@/components/TodoInput.vue';
  import TodoList from '@/components/TodoList.vue';
  import axios from 'axios';
  import {ref} from 'vue';

  const todoItems = ref([]);
  const USER_ID = 26;

  const  getTodos = async () => {
    let response = await axios.get(`https://dummyjson.com/todos/user/${USER_ID}`)

    if (response.data) {
      todoItems.value = response.data.todos;
    }
  };
  getTodos();

  const addTodo = (item) => {
    todoItems.value.push(item.value);
  };

  const removeTodo = (item) => {
    todoItems.value.splice(todoItems.value.indexOf(item), 1);
  };
</script>
