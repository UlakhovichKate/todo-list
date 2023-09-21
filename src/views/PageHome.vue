<template>
  <div class="page">
    <TodoInput @added-todo="addTodo" />
    <TodoList
      :list-items="listItems"
      @removed-todo="removeTodo"
    />
  </div>
</template>

<script setup>
  import TodoInput from '@/components/TodoInput.vue';
  import TodoList from '@/components/TodoList.vue';
  import axios from 'axios';
  import {ref} from 'vue';

  const listItems = ref(null);
  const USERID = 26;

  const  getTodos = async () => {
    let response = await axios.get(`https://dummyjson.com/todos/user/${USERID}`)

    if (response.data) {
      listItems.value = response.data.todos;
    }
  };
  getTodos();

  const addTodo = (item) => {
    listItems.value.push({
      id: listItems.value.length + 1,
      todo: item.value,
      completed: false,
      userId: USERID,
    });
  };

  const removeTodo = (id) => {
    listItems.value = listItems.value.filter((el) => el.id !== id);
  };
</script>
