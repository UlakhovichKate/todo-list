<template>
  <div class="input-group">
    <input
      v-model="text"
      type="text"
      class="input"
      placeholder="add new todo"
    />
    <button
      @click="addToDo"
      type="button"
      class="btn btn--submit"
    >
      Create
    </button>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const emit = defineEmits(['addedTodo']);

  const text = ref('');

  const addToDo = () => {
    if (text.value) {
      emit('addedTodo', text);
      text.value = '';
    }
  };
</script>

<style type="scss" scoped>
  .input-group {
    margin-bottom: 50px;
  }

  .btn--submit {
    background-color: transparent;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
</style>
