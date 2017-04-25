<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item is-brand">
          Puppies
        </a>
    </div>


  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right">
    <a class="nav-item" href="index">
      All Puppies
    </a>
    <a class="nav-item" href="new">
      Add Puppy
    </a>
  </div>
</nav>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <nav class="panel">
            <p class="panel-heading">Adopt a Pupper</p>

            <!-- Update sidebar to loop through puppies -->
            <!-- Show individual puppy within the loop -->
            <div class="panel-block" v-for="puppy in puppies">
              <div class="media">
                <div class="media-left">
                  <span class="image is-64x64 is-square">

                    <!-- Puppy image -->
                    <img :src="puppy.image_url" alt="">
                  </span>
                </div>
              </div>
                <div class="media-right">

                  <!-- Puppy name -->
                  <h2 class="subtitle">{{ puppy.name }}</h2>

                  <!-- Update router-link to link pass in the puppy.id as the id url parameter -->
                  <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
                </div>
              </div>

          </nav>
        </div>

          <div class="column is-8">
            <router-view></router-view>
          </div>

        </div> <!--columns -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
//  Import the store in the application component
import store from '../store';
// Import the findAll function from the puppy actions module
import {
  findAll
} from '../actions/puppy';
export default {
  data() {
    // Use this.$select to attach the local puppies data to the puppies property in the state
    return {
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
