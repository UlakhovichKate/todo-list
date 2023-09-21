<template>
  <div class="bar">
    <input
      v-model="todoContent"
      type="text"
      class="input"
      placeholder="add new todo"
    />
    <button
      @click="addTodo"
      type="button"
      class="btn btn_submit"
    >
      Create
    </button>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue';

  const emit = defineEmits(['addTodo']);

  const todoContent = ref('');

  const newTodoObject = reactive([])
  const addTodo = () => {
    if (todoContent.value) {
      newTodoObject.value = {
        id: (new Date()).getTime(),
        todo: todoContent.value,
        completed: false,
        userId: 26,
      }
      emit('addTodo', newTodoObject);
      todoContent.value = '';
    }
  };
</script>

<style type="scss" scoped>
  .bar {
    margin-bottom: 50px;
  }

  .btn_submit {
    background-color: transparent;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
</style>
