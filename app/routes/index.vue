<template lang="html">
  <div class="">
    <div class="level">
      <div class="level-left">
        <p class="title level-item">Puppies for Adoption</p>
      </div>
      <div class="level-right">
        <div class="block">
          <a href="" class="button is-primary nav-item is-info">Add a Pupper</a>
        </div>
      </div>
    </div>
    <!-- Update sidebar to loop through puppies -->
     <!-- Make a table head with: -->
    <table class="table">
      <thead>
        <tr>
          <!-- Name -->
          <th>Name</th>
          <!-- Age -->
          <th>Age</th>
          <!-- Empty head -->
          <th></th>
        </tr>
      </thead>
      <!-- Make a repeating table row for each puppy in the puppies array and show: -->
      <tbody>
        <tr v-for="puppy in puppies">
        <!-- Puppy Name -->
        <td>{{ puppy.name }}</td>
        <!-- Puppy Age -->
        <td>{{ puppy.age }}</td>
        <!-- A router-link to the detail route and pass the pass in the current puppy's id as the id url parameter -->
        <td>
        <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
      </td>
      </tr>
      </tbody>
    </table>


    <div class="level">
      <div class="level-left">
    <p class="title level-item">Adopted Puppies</p>
  </div>
  </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puppy in puppies">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age }}</td>
          <td>
            <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Import the store in the index component
import store from '../store';
// Import the findAll function from the puppy actions module
import { findAll } from '../actions/puppy'
export default {
  data() {
    return {
      // Use this.$select to attach the local puppies data to the puppies property in the state
      puppies: this.$select('puppies'),
    };
  },
  // When the application component loads, dispatch the findAll function
  created() {
    store.dispatch(findAll());
  },

  methods: {
  },
};
</script>
