<template lang="html">
  <div class="">
    <div class="title">Found a Pupper? We Can Help!</div>
    <!-- Create a form to take inputs for: (binding v-model to properties on formValues) -->
     <!-- Name (name on the server) -->
    <label class="label" v-model="formValues.name">Name</label>
    <p class="control">
      <input class="input" type="text">
    </p>
    <!-- Age (age on the server) -->
    <label class="label" v-model="formValues.age">Age</label>
    <p class="control">
      <input class="input" type="text">
    </p>
    <!-- Sex (Ideally a select with options for "male" and "female") (sex on the server) -->
    <label class="label">Sex</label>
    <p class="control ">
    <span class="select ">
      <select class="" v-model="formValues.sex">
        <option class="is-info">Male</option>
        <option class="is-info">Female</option>
      </select>
    </span>
    </p>
    <!-- Color (color on the server) -->
    <label class="label">Color</label>
    <p class="control">
      <input class="input" type="text" v-model="formValues.color">
    </p>
    <!-- Breed (breed on the server) -->
    <label class="label">Breed</label>
    <p class="control">
      <input class="input" type="text" v-model="formValues.bread">
    </p>
    <!-- Image Url (image_url on the server) -->
    <label class="label">Image Url</label>
    <p class="control">
      <input class="input" type="text" v-model="formValues.image_url">
    </p>
    <!-- Description (Use a textarea) (description on the server) -->
    <label class="label">Description</label>
    <p class="control">
      <textarea class="textarea" v-model="formValues.description"></textarea>
    </p>
    <a class="button">Back</a>
    <a class="button is-primary">Submit</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Add a formValues object to your data object
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
