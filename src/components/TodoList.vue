<template>
  <div class="todo-list">
    <div
      v-for="(item, index) in todoItems"
      :id="index"
      :key="item.id"
      :class="[item.completed ? 'completed' : 'active']"
      class="todo-list__item"
    >
      <input
        v-if="item.isEditing"
        v-model="item.todo"
        type="text"
        class="todo-list__input"
      />
      <span
        v-else
        class="todo-list__name"
      >
        {{ item.todo }}
      </span>

      <button
        @click="editTodo(item)"
        class="todo-list__btn todo-list__btn_edit"
      >
        &#9998;
      </button>
      <button
        @click="markComplete(item)"
        class="todo-list__btn todo-list__btn_complete"
      >
        &#10003;
      </button>
      <button
        @click="removeTodo(item)"
        class="todo-list__btn todo-list__btn_remove"
      >
        X
      </button>
    </div>
  </div>
</template>

<script setup>
  import {computed} from 'vue';

  const props = defineProps({
    todoItems: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(['removeTodo']);

  const todoItems = computed(() => props.todoItems);

  const removeTodo = (item) => {
    emit('removeTodo', item);
  };

  const markComplete = (item) => {
    item.completed = true;
  };

  const editTodo = (el) => {
    el.isEditing = el.isEditing ? !el.isEditing : true;
  };
</script>

<style lang="scss" scoped>
  .todo-list {
    max-width: 500px;
    width: 100%;

    &__item {
      display: grid;
      grid-template-columns: 1fr 30px 30px 30px;
      padding: 5px 10px;
      border: 1px solid #bbb;
      background: #fff;

      &:not(:last-of-type) {
        border-bottom: none;
      }
    }

    &__btn {
      border: none;
      background: transparent;
      line-height: 1;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &_remove {
        background-color: #111;
        color: #fff;
      }

      &_complete {
        background-color: #20763c;
        color: #fff;
      }
    }

    &__name {
      .completed & {
        text-decoration: line-through;
      }
    }
  }
</style>
