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
        <div class="column is-5">
          <nav class="panel">
            <p class="panel-heading">
              Adopt a Pupper
            </p>
            <!-- panel-1 -->
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <img src="http://placehold.it/100x100" alt="">
                </div>
              </div>
                <div class="media-right">
                  <p class="subtitle">Name</p>
                  <a href="detail">Read More</a>
                </div>
              </div>
            <!-- panel-2 -->
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <img src="http://placehold.it/100x100" alt="">
                </div>
              </div>
                <div class="media-right">
                  <p class="subtitle">Name</p>
                  <a href="detail">Read More</a>
                </div>
              </div>
            <!-- panel-3 -->
            <div class="panel-block">
              <div class="media">
                <div class="media-left">
                  <img src="http://placehold.it/100x100" alt="">
                </div>
              </div>
                <div class="media-right">
                  <p class="subtitle">Name</p>
                  <a href="detail">Read More</a>
                </div>
              </div>
            </div>
          </nav>
          <div class="column is-two-thirds">
            <router-view></router-view>
          </div>
        </div> <!--columns -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
