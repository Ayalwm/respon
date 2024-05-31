<template>
  <div class="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-200 shadow-md">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
  <div class="flex flex-col h-screen bg-gray-900 text-white">
    <!-- Location details -->
    <div
      class="flex-shrink-0 flex flex-col left-0 items-start justify-start mt-20% p-11 bg-gray-800">
      <h1 class="text-xl">Location Detail:</h1>
      <div v-if="location">
        <h2 class="text-xl mt-24 font-semibold mb-2">{{ location.name }}</h2>
        <p>Type: {{ location.type }}</p>
        <p>Dimension: {{ location.dimension }}</p>
        <p>Created: {{ location.created }}</p>
      </div>
    </div>

    <!-- Residents section -->
    <div class="flex-grow overflow-y-auto p-6">
      <!-- Residents list -->
      <h1 class="m-2 text-2xl">Residents</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="resident in location.residents"
          :key="resident.id"
          class="bg-gray-800 border border-gray-600 rounded-lg shadow-md p-4 hover:shadow-lg">
          <img
            :src="resident.image"
            alt=""
            class="w-24 h-24 rounded-full mb-2 mx-auto" />
          <div class="text-center">
            <p class="text-lg font-semibold">{{ resident.name }}</p>
            <p>Status: {{ resident.status }}</p>
            <p>Species: {{ resident.species }}</p>
            <p>Gender: {{ resident.gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

const LOCATION_QUERY = gql`
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      created
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export default {
  setup() {
    const route = useRoute();
    const { result, loading, error } = useQuery(LOCATION_QUERY, {
      id: route.params.id,
    });
    const location = ref(null);

    // Watch for changes in the result
    watchEffect(() => {
      if (result.value) {
        location.value = result.value.location;
      }
    });

    return {
      location,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.bg-gray-200 {
  background-color: #1f2937; /* Adjust the background color as needed */
}

.text-white {
  color: #ffffff;
}
</style>
