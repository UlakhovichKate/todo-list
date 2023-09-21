<template>
  <ul class="list">
    <li
      v-for="(item, index) in listItems"
      :id="index"
      :key="item.id"
    >
      <TodoListItem
        :list-item="item"
        @removed-todo="removeTodo(item.id)"
      />
    </li>
  </ul>
</template>

<script setup>
  import {computed} from 'vue';
  import TodoListItem from '@/components/TodoListItem.vue';

  const props = defineProps({
    listItems: Object,
  });

  const emit = defineEmits(['removedTodo']);

  const listItems = computed(() => props.listItems);

  const removeTodo = (id) => {
    emit('removedTodo', id);
  };
</script>

<style type="scss" scoped>
  .list {
    max-width: 500px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
