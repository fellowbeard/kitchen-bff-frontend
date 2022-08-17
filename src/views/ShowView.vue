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
  methods: {
    destroyRecipe: function (recipe) {
      axios.delete("/recipes" + recipe.id).then((response) => {
        console.log("recipes destroy", response);
        this.$router.push("/recipes");
      });
    },
  },
};
</script>

<template>
  <div class="recipes-show">
    <h2>{{ recipe.name }}</h2>
    <router-link v-bind:to="`/recipes/${recipe.id}/edit`">Edit recipe</router-link>
    <button v-on:click="destroyRecipe(recipe)">Destroy Recipe</button>
    <router-link to="/recipes">Back to Recipes</router-link>
  </div>
</template>
