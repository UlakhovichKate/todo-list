<template>
  <div class="list">
    <div
      v-for="(item, index) in todoItems"
      :id="index"
      :key="item.id"
      :class="[item.completed ? 'completed' : 'active']"
      class="item"
    >
      <input
          v-if="item.isEditing"
          v-model="item.todo"
          type="text"
          class="input"
      />
      <span
          v-else
          class="name"
      >
        {{ item.todo }}
      </span>

      <button
          @click="editTodo(item)"
          class="btn btn_edit"
      >
        &#9998;
      </button>
      <button
          v-if="!item.completed"
          @click="markComplete(item)"
          class="btn btn_complete"
      >
        &#10003;
      </button>
      <button
          v-else
          @click="removeTodo(item)"
          class="btn btn_remove"
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
      default: () => {},
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

  //const isEditing = ref(false);
  const editTodo = (el) => {
    el.isEditing = el.isEditing ? !el.isEditing : true;
  };
</script>

<style type="scss" scoped>
  .list {
    max-width: 500px;
    width: 100%;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr 30px 30px;
    padding: 5px 10px;
    border: 1px solid #bbb;
    background: #fff;

    &:not(:last-of-type) {
      border-bottom: none;
    }

    &.completed {
      .name {
        text-decoration: line-through;
      }
    }
  }

  .btn {
    border: none;
    background: transparent;
    line-height: 1;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &.btn_remove {
      background-color: #111;
      color: #fff;
    }

    &.btn_complete {
      background-color: #20763c;
      color: #fff;
    }
  }
</style>
