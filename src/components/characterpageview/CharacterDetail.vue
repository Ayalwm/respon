<template>
  <div class="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-600 shadow-md">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
  <div class="flex flex-col h-screen bg-custom-color text-white">
    <!-- Character information -->
    <div class="flex-shrink-0 flex justify-center bg-inherit py-4 shadow-lg">
      <div v-if="character">
        <div class="text-center">
          <div
            class="rounded-full overflow-hidden w-32 h-32 mx-auto mb-2 shadow-md">
            <img
              :src="character.image"
              alt=""
              class="w-full h-full object-cover" />
          </div>
          <h2 class="text-lg font-semibold">{{ character.name }}</h2>
          <p class="text-sm text-gray-300">Species: {{ character.species }}</p>
          <p class="text-sm text-gray-300">Gender: {{ character.gender }}</p>
          <p class="text-sm text-gray-300">
            Last Known Location: {{ character.location.name }}
          </p>
        </div>
      </div>
    </div>
    <!-- Main content area -->
    <div class="flex-grow overflow-y-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Character Details</h1>
      <div v-if="loading" class="text-lg">Loading...</div>
      <div v-if="error" class="text-lg">Error: {{ error.message }}</div>
      <template v-if="character">
        <div class="mt-8">
          <h3 class="text-2xl font-bold mb-6">Episodes</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              v-for="episode in character.episode"
              :key="episode.id"
              class="bg-transparent border border-gray-600 rounded-lg p-4 shadow-md mr-4">
              <h4 class="text-lg font-semibold">{{ episode.name }}</h4>
              <p class="text-sm text-gray-300">
                Air Date: {{ episode.air_date }}
              </p>
              <p class="text-sm text-gray-300">
                Episode: {{ episode.episode }}
              </p>
              <p class="text-sm text-gray-300">
                Created: {{ episode.created }}
              </p>
            </div>
          </div>
        </div>
      </template>
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
        href="https://github.com/ewostatewos"
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

const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      species
      gender
      image
      location {
        name
      }
      episode {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

export default {
  name: "CharacterDetail",
  setup() {
    const route = useRoute();
    const { result, loading, error } = useQuery(CHARACTER_QUERY, {
      id: route.params.id,
    });
    const character = ref(null);

    watchEffect(() => {
      if (result.value) {
        character.value = result.value.character;
      }
    });

    return {
      character,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}
.bg-custom-color {
  background-color: #222222; /* Custom color for the component */
}
</style>
