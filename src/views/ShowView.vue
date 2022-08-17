<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
    };
  },
  created: function () {
    axios.get("/recipes" + this.$route.params.id).then((response) => {
      console.log("recipes show", response);
      this.recipe = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="recipes-show">
    <h2>{{ recipe.name }}</h2>
    <router-link to="/recipes">Back to Recipes</router-link>
  </div>
</template>
