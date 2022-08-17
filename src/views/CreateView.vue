<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newRecipeParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createRecipe: function () {
      axios
        .post("/recipes", this.newRecipeParams)
        .then((response) => {
          console.log("recipes create", response);
          this.$router.push("/recipes");
        })
        .catch((error) => {
          console.log("recipes create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="recipes-new">
    <h1>New Recipe</h1>
    <form v-on:submit.prevent="createRecipe()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </form>
  </div>
</template>
