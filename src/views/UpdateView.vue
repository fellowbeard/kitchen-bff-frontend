<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
      editRecipeParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      console.log("recipes show", response);
      this.recipe = response.data;
      this.editRecipeParams = this.recipe;
    });
  },
  methods: {
    updateRecipe: function (recipe) {
      axios
        .patch("/recipes/" + recipe.id, this.editRecipeParams)
        .then((response) => {
          console.log("recfipes update", response);
          this.$router.push("/recipes");
        })
        .catch((error) => {
          console.log.apply("recipes update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="recipes-edit">
    <h1>Edit Recipe</h1>
  </div>
</template>
