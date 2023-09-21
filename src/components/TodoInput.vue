<template>
  <div class="input-group">
    <input
      v-model="text"
      type="text"
      class="input"
      placeholder="add new todo"
    />
    <button
      @click="addTodo"
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

  const addTodo = () => {
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
