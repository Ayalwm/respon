<template>
  <div class="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-600 shadow-md">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
  <div class="bg-gray-900 h-screen overflow-y-auto">
    <div class="flex flex-col items-center h-screen bg-gray-900 text-white">
      <!-- Episode details at the top center -->
      <div class="w-full p-6 bg-gray-900 mb-6">
        <h1 class="text-2xl font-bold">Episode Details</h1>
        <!-- Display episode information -->
        <div v-if="loading" class="text-lg">Loading...</div>
        <div v-if="error" class="text-lg">Error: {{ error.message }}</div>
        <div v-if="episode">
          <h2 class="text-xl font-semibold">{{ episode.name }}</h2>
          <p>Air Date: {{ episode.air_date }}</p>
          <p>Episode: {{ episode.episode }}</p>
          <p>Created: {{ episode.created }}</p>
        </div>
      </div>

      <!-- Characters -->
      <div class="flex-grow w-full p-6">
        <h1 class="text-2xl font-bold mb-6">Characters</h1>
        <div v-if="loading" class="text-lg">Loading...</div>
        <div v-if="error" class="text-lg">Error: {{ error.message }}</div>
        <div v-if="episode">
          <!-- Display characters -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              v-for="character in episode.characters"
              :key="character.id"
              class="bg-gray-900 rounded-lg p-4 flex shadow-md">
              <img
                :src="character.image"
                alt=""
                class="w-24 h-24 mr-4 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80 hover:bg-gray-600" />
              <div class="flex flex-col justify-center">
                <p class="text-lg font-semibold">{{ character.name }}</p>
                <p class="text-sm">Species: {{ character.species }}</p>
                <p class="text-sm">Status: {{ character.status }}</p>
                <p class="text-sm">Gender: {{ character.gender }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer
    class="fixed bottom-0 left-0 right-0 z-50 bg-gray-400 text-white p-4 text-center">
    <div class="flex justify-center space-x-4">
      <a
        href="https://www.figma.com/proto/jbHnsUpryXgqgHHtwhmcBo/figma?node-id=0-40&t=NLg0ENDNQxpalcEC-1&scaling=contain&page-id=0%3A1&starting-point-node-id=0%3A40"
        target="_blank"
        rel="noopener noreferrer"
        class="text-pink-400"
        >Figma</a
      >
      <a
        href="https://github.com/ayalwm"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-700"
        >GitHub</a
      >
    </div>
    <p>&copy; 2024 Ricky and Morty.</p>
  </footer>
</template>

<script>
import { ref, watchEffect } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

const EPISODE_QUERY = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      name
      air_date
      episode
      created
      characters {
        id
        name
        species
        status
        gender
        image
      }
    }
  }
`;

export default {
  name: "CharacterDetail",
  setup() {
    const route = useRoute();
    const { result, loading, error } = useQuery(EPISODE_QUERY, {
      id: route.params.id,
    });
    const episode = ref(null);

    watchEffect(() => {
      if (result.value) {
        episode.value = result.value.episode;
      }
    });

    return {
      episode,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.bg-gray-800 {
  background-color: #333333; /* Dark gray for the episode details */
}
.bg-black {
  background-color: #000000; /* Black for the characters */
}
.border-gray-600 {
  border-color: #555555; /* Darker gray border */
}
</style>
