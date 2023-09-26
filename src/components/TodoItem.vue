<template>
  <div
    :class="{isCompleted: item.completed, isEditing}"
    class="todo-item"
  >
    <input
      v-model="item.todo"
      type="text"
      class="todo-item__name-input"
    />
    <span class="todo-item__name">
      {{ item.todo }}
    </span>

    <button
      :disabled="item.completed"
      class="todo-item__btn todo-item__btn_edit"
      @click="editTodo()"
    >
      &#9998;
    </button>
    <button
      class="todo-item__btn todo-item__btn_complete"
      @click="toggleComplete()"
    >
      &#10003;
    </button>
    <button
      class="todo-item__btn todo-item__btn_remove"
      @click="removeTodo()"
    >
      X
    </button>
  </div>
</template>

<script setup>
  import {computed, ref} from 'vue';

  const props = defineProps({
    todo: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(['removeTodo']);

  const item = computed(() => props.todo);

  const removeTodo = () => {
    emit('removeTodo', item.value);
  };

  const toggleComplete = () => {
    item.value.completed = !item.value.completed;
  };

  const isEditing = ref(false);

  const editTodo = () => {
    isEditing.value = !isEditing.value;
  };
</script>

<style lang="scss" scoped>
  .todo-item {
    display: grid;
    grid-template-columns: 1fr 30px 30px 30px;
    padding: 5px 10px;
    border: 1px solid #bbb;
    background: #fff;

    &:not(:last-of-type) {
      border-bottom: none;
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

        .isCompleted & {
          opacity: 0.5;
        }
      }

      &_edit {
        .isEditing & {
          color: #888;
        }

        &:disabled {
          color: #aaa;
          cursor: not-allowed;
        }
      }
    }

    &__name {
      .isCompleted & {
        text-decoration: line-through;
      }

      .isEditing & {
        display: none;
      }
    }

    &__name-input {
      display: none;

      .isEditing & {
        display: block;
      }
    }
  }
</style>
