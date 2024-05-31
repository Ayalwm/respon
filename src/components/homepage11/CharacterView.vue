<template>
  <div class="p-4">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-5">
      <router-link
        v-for="character in characters"
        :key="character.id"
        :to="{ name: 'CharacterDetail', params: { id: character.id } }"
        class="group text-center transform hover:scale-105 transition duration-300 ease-in-out">
        <img
          :src="character.image"
          alt=""
          class="w-full h-61 object-cover shadow-md group-hover:shadow-lg transition duration-300" />
        <h2 class="text-lg font-semibold text-white mt-2">
          {{ character.name }}
        </h2>
      </router-link>
    </div>
    <div v-if="characters.length === 0" class="text-white mt-4">
      No characters available.
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const { result, loading, error, refetch } = useQuery(CHARACTERS_QUERY, null, {
  fetchPolicy: "network-only",
});
const characters = ref([]);

watch(result, (newResult) => {
  if (newResult && newResult.characters) {
    characters.value = newResult.characters.results;
  }
});

// Function to refetch characters
const fetchCharacters = async () => {
  await refetch();
  characters.value = result.value.characters.results;
};
</script>

<style scoped>
.group img {
  border-radius: 8px; /* Slightly round the corners of the image */
}

.grid {
  gap: 1.5rem;
}

.p-4 {
  padding: 1rem;
}

.text-lg {
  font-size: 1.125rem;
}
</style>
