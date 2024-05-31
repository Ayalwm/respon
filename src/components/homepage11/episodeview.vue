<template>
  <div class="p-4 w-full">
    <div class="max-h-[80vh] overflow-y-auto">
      <div class="shadow-md border rounded-lg p-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <router-link
            v-for="episode in episodes"
            :key="episode.id"
            :to="{ name: 'EpisodeDetail', params: { id: episode.id } }"
            class="episode-link group rounded-lg shadow-md overflow-hidden bg-black transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg">
            <img
              :src="episodeImages[episode.id]"
              alt=""
              class="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:brightness-75" />
            <div class="p-4">
              <h2 class="text-xl font-semibold text-white">
                {{ episode.name }}
              </h2>
              <p class="text-md text-white">{{ episode.episode }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const EPISODES_QUERY = gql`
  query AllEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        next
      }
      results {
        id
        episode
        name
        characters {
          id
          image
        }
      }
    }
  }
`;

export default {
  setup() {
    const { result, loading, error, refetch } = useQuery(
      EPISODES_QUERY,
      { page: 1 },
      { fetchPolicy: "network-only" }
    );
    const episodes = ref([]);
    const episodeImages = ref({});

    const fetchAllEpisodes = async () => {
      let nextPage = 1;
      let allEpisodes = [];

      while (nextPage) {
        const { data, error } = await refetch({ page: nextPage });

        if (error) {
          console.error("Error fetching episodes:", error);
          break;
        }

        allEpisodes.push(...data.episodes.results);
        nextPage = data.episodes.info.next;
      }

      episodes.value = allEpisodes;

      // Assign a random character image to each episode if not already assigned
      allEpisodes.forEach((episode) => {
        if (!episodeImages.value[episode.id] && episode.characters.length > 0) {
          const randomCharacter =
            episode.characters[
              Math.floor(Math.random() * episode.characters.length)
            ];
          episodeImages.value[episode.id] = randomCharacter.image;
        }
      });
    };

    watch(result, () => {
      fetchAllEpisodes();
    });

    return {
      episodes,
      episodeImages,
      loading,
      error,
      refetch,
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
