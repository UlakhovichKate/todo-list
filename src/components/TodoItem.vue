<template>
  <div
    :class="[item.completed ? 'completed' : 'active']"
    class="todo-item"
  >
    <input
      ref="isEditingRef"
      v-if="isEditingRef"
      v-model="item.todo"
      type="text"
      class="todo-item__input"
    />
    <span
      v-else
      class="todo-item__name"
    >
      {{ item.todo }}
    </span>

    <button
      :disabled="item.completed"
      :class="[isEditingRef ? 'editing' : '']"
      class="todo-item__btn todo-item__btn_edit"
      @click="editTodo()"
    >
      &#9998;
    </button>
    <button
      class="todo-item__btn todo-item__btn_complete"
      @click="markComplete(item)"
    >
      &#10003;
    </button>
    <button
      class="todo-item__btn todo-item__btn_remove"
      @click="removeTodo(item)"
    >
      X
    </button>
  </div>
</template>

<script setup>
  import {computed, ref} from 'vue';

  const props = defineProps({
    todoItem: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(['removeTodo']);

  const item = computed(() => props.todoItem);

  const removeTodo = (item) => {
    emit('removeTodo', item);
  };

  const markComplete = (item) => {
    item.completed = !item.completed;
  };

  const isEditingRef = ref(false);

  const editTodo = () => {
    isEditingRef.value = !isEditingRef.value;
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

        .completed & {
          opacity: 0.5;
        }
      }

      &_edit {
        &.editing {
          color: #888;
        }

        &:disabled {
          color: #aaa;
          cursor: not-allowed;
        }
      }
    }

    &__name {
      .completed & {
        text-decoration: line-through;
      }
    }
  }
</style>
