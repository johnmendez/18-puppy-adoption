<!-- Create a detail.vue component in the routes directory -->
<template lang="html">
  <div class="">
    <div class="transition-spot">

    <!-- Name (name on the server) -->
    <div class="level">
      <div class="level-item has-text-centered">
        <p class="title">{{ currentPuppy.name }}</p>
        <span>
          <!-- Add a v-if to the button so that if the dog is adopted the button is Green and says "I'm Adopted" -->
          <!-- Add a v-else to another button so that if the dog is no adopted the button is Blue and says "Adopt Me" -->
          <!-- Both buttons should have the click listener that fires the adopt method -->
          <button v-on:click="adopt" class="button is-primary" v-bind:class="{ 'is-success': currentPuppy.adopted }">
           <span v-if="currentPuppy.adopted">I'm adopted!</span>
           <span v-else>Adopt me!</span>
         </button>
        </span>
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <img v-bind:src="currentPuppy.image_url" alt="" class="image">
      </div>
    </div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">AGE</p>
          <p class="title">{{ currentPuppy.age }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">BREED</p>
          <p class="title">{{ currentPuppy.breed }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">COLOR</p>
          <p class="title">{{ currentPuppy.color}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">SEX</p>
          <p class="title">{{ currentPuppy.sex }}</p>
        </div>
      </div>
    </nav>
    <div class="card is-fullwidth">
      <div class="card-content">
      <h3 class="subtitle">About Me</h3>
      <p>{{ currentPuppy.description }}</p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import store from '../store';
import { findOne } from '../actions/puppy';
import { toggleAdopted } from '../actions/puppy';
export default {
  name: 'Detail',
  data() {
    return {
      // puppies should be linked to the puppies value from the redux store
      puppies: this.$select('puppies'),
      // currentPuppy should be a POJO (plain 'ol Javascript Object)
      currentPuppy: null,
    };
  },
  // When the detail page mounts, dispatch findOne with the id parameter from the current route
  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },
  //  Add a watch object to the component that says to watch the puppies property for changes and run a method called getPuppy
  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },
  // Create a getPuppy method to the methods
 // Set the value of currentPuppy to the result of using find to find where the puppy id is equal to the id parameter in the route
  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id === this.$route.params.id);
    },
    // Create an adopt method that dispatches the toggleAdopted action creator and passes in this.currentPuppy
    adopt() {
      store.dispatch(toggleAdopted(this.currentPuppy));
    }
  },
};
</script>
