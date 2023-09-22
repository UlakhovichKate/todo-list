<template>
  <div class="bar">
    <input
      v-model="todoContent"
      type="text"
      class="bar__input"
      placeholder="add new todo"
    />
    <button
      @click="addTodo"
      type="button"
      class="bar__btn bar__btn_submit"
    >
      Create
    </button>
  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue';

  const emit = defineEmits(['addTodo']);

  const todoContent = ref('');

  const newTodoObject = reactive([]);
  const addTodo = () => {
    if (todoContent.value) {
      newTodoObject.value = {
        id: new Date().getTime(),
        todo: todoContent.value,
        completed: false,
        userId: 26,
      };
      emit('addTodo', newTodoObject);
      todoContent.value = '';
    }
  };
</script>

<style type="scss" scoped>
  .bar {
    display: grid;
    grid-template-columns: 1fr 80px;
    margin-bottom: 30px;
  }

  .bar__input {
    padding: 5px 10px;
  }

  .bar__btn {
    padding: 6px 10px;
    background-color: transparent;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
</style>
