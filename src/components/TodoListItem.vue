<template>
  <div
    :class="[item.completed ? 'completed' : 'active']"
    class="item"
  >
    <input
      type="text"
      v-model="item.todo"
      class="input"
    />
    <span class="name">{{ item.todo }}</span>

    <div class="buttons">
      <button
        @click="editTodo"
        class="btn btn--edit"
      >
        &#9998;
      </button>
      <button
        v-if="!item.completed"
        @click="markComplete"
        class="btn btn--complete"
      >
        &#10003;
      </button>
      <button
        v-else
        @click="removeTodo"
        class="btn btn--remove"
      >
        X
      </button>
    </div>
  </div>
</template>

<script setup>
  import {computed} from 'vue';

  const props = defineProps({
    listItem: Object,
  });

  const emit = defineEmits(['removedTodo']);

  const item = computed(() => props.listItem);

  const markComplete = () => {
    item.value.completed = true;
  };

  const removeTodo = () => {
    emit('removedTodo');
  };

  const editTodo = (e) => {
    let parent = e.target.closest('.item');
    parent.classList.toggle('edit');
  };
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    &.completed {
      .name {
        text-decoration: line-through;
      }
    }

    &.edit {
      .name {
        display: none;
      }

      .input {
        display: block;
        width: 80%;
      }
    }
  }

  .input {
    display: none;
  }

  .btn {
    border: 1px solid;
    background-color: transparent;
    line-height: 1;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &.btn--remove {
      background-color: #111;
      color: #fff;
    }

    &.btn--complete {
      background-color: #20763c;
      color: #fff;
    }
  }
</style>
