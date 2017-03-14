<!-- Create a detail.vue component in the routes directory -->
<template lang="html">
  <div class="">
    <div class="transition-spot">

    <!-- Create a form to take inputs for: (binding v-model to properties on formValues) -->
    <!-- Name (name on the server) -->
    <div class="level">
      <div class="level-item has-text-centered">
        <p class="title" v-model="formValues.name">Name</p>
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <img src="http://placehold.it/300x300" alt="" v-model="formValues.image_url">
      </div>
    </div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">AGE</p>
          <p class="title" v-model="formValues.age">#</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">BREED</p>
          <p class="title" v-model="formValues.breed">Type Of Breed</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">COLOR</p>
          <p class="title" v-model="formValues.color">Type Of Color</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">SEX</p>
          <p class="title" v-model="formValues.sex">Gender</p>
        </div>
      </div>
    </nav>
    <div class="card is-fullwidth">
      <div class="card-content">
      <h3 class="subtitle">About Me</h3>
      <p v-model="formValues.description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      }
    };
  },

  methods: {

  },
};
</script>
