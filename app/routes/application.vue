<template lang="html">
  <div class="app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          Puppies
        </a>
    </div>


  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right">
    <a class="nav-item">
      All Puppies
    </a>
    <a class="nav-item">
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
                  <p class="subtitle">Read More</p>
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
                  <p class="subtitle">Read More</p>
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
                  <p class="subtitle">Read More</p>
                </div>
              </div>
            </div>
          </nav>
          <div class="column is-two-thirds">
            <table class="table">
              <p class="title">Puppies for Adoption</p>
              <tr class=""></tr>
            </table>
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
