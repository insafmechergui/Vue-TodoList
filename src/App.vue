<template>
  <div>
    <form v-on:submit="handleAddTodo($event)">
      <input type="text" v-model="input" />
    </form>
    <label class="show-completed">
      Show Completed Items?
      <input type="checkbox" v-model="showDone" />
    </label>
    <ul v-for="todo in $data.todos.filter(shouldShowTodo)" :key="todo">
      <li v-bind:class="{ complete: todo.done }">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    handleAddTodo(e) {
      e.preventDefault();
      this.$data.todos.push({ text: this.input, done: false });
      this.input = "";
    },
    shouldShowTodo(todo) {
      if (this.$data.showDone) {
        return true;
      } else {
        return !todo.done;
      }
    },
  },
  data() {
    return this.$props.state;
  },
  props: ["state"],
};
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
  color: whitesmoke;
  font-size: 1.4em;
  background-color: black;
  margin: auto;
  width: 50%;
}
h1 {
  margin-top: 1em;
}

.complete {
  color: gainsboro;
  text-decoration: line-through;
  font-style: italic;
  margin: 1.4em;
  width: 15em;
  position: relative;
}
input[type="text"] {
  margin-top: 1em;
  padding: 0.8em;
  width: 100%;
  font-size: 0.7em;
}
input[type="checkbox"] {
  padding: 1em;
  cursor: pointer;
  margin-right: 2em;
  margin-left: 2em;
}
li {
  list-style-type: none;
  padding: 1em 0 1em 0;
  border-bottom: 1px solid lightcoral;
  position: relative;
}
li input {
  transform: scale(1);
}
ul {
  padding: 0;
}
label {
  width: 60%;
}
.complete {
  color: gainsboro;
  text-decoration: line-through;
  font-style: italic;
}
.show-completed {
  font-size: 1rem;
  color: lightgreen;
}
.show-completed input {
  transform: scale(1.4);
}
</style>