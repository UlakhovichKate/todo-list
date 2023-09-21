<template>
  <AddNewItem @added-to-do="addToDo" />

  <ul class="list">
    <li
      v-for="(item, index) in listItems"
      :key="item.id"
      :class="[item.completed ? 'completed' : 'active', isEditing]"
      :id="index"
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
          @click="onEditingMode"
          class="btn btn--edit"
        >
          &#9998;
        </button>
        <button
          v-if="!item.completed"
          @click="markComplete(item.id)"
          class="btn btn--complete"
        >
          &#10003;
        </button>
        <button
          v-else
          @click="removeFromList(item.id)"
          class="btn btn--remove"
        >
          X
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup>
  import axios from 'axios';
  import {ref} from 'vue';
  import AddNewItem from '@/components/AddNewItem.vue';

  const listItems = ref(null);
  const USERID = 26;

  async function getTodos() {
    await axios
      .get(`https://dummyjson.com/todos/user/${USERID}`)
      .then(function (response) {
        if (response.data) {
          listItems.value = response.data.todos;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getTodos();

  function addToDo(item) {
    listItems.value.push({
      id: listItems.value.length + 1,
      todo: item.value,
      completed: false,
      userId: USERID,
    });
  }

  function markComplete(id) {
    listItems.value.map((el) => {
      if (el.id === id) {
        el.completed = true;
      }
      return el;
    });
  }

  function removeFromList(id) {
    listItems.value = listItems.value.filter((el) => {
      if (el.id !== id) {
        return el;
      }
    });
  }

  const isEditing = ref(false);

  function onEditingMode(e) {
    let element = e.target;
    let parent = element.closest('.item');
    parent.classList.toggle('edit');
  }
</script>

<style type="scss" scoped>
  .list {
    max-width: 500px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
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
