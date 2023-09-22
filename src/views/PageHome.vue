<template>
  <div class="page">
    <div class="page__content-wrapper">
      <div class="todo-component">
        <todo-input @addTodo="addTodo" />
        <todo-list
            :todo-items="todoItems"
            @removeTodo="removeTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import TodoInput from '@/components/TodoInput.vue';
  import TodoList from '@/components/TodoList.vue';
  import {ref} from 'vue';
  import {getAllTodos} from '@/api/apiTodos';

  const todoItems = ref([]);

  const getTodos = async () => {
    let response = await getAllTodos();

    todoItems.value = response.data?.todos;
  };
  getTodos();

  const addTodo = (item) => {
    todoItems.value.push(item.value);
  };

  const removeTodo = (item) => {
    todoItems.value.splice(todoItems.value.indexOf(item), 1);
  };
</script>

<style type="scss" scoped>
.todo-component {
  max-width: 500px;
  margin: 50px auto;
}
</style>