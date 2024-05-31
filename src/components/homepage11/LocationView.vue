<template>
  <div class="p-6">
    <div
      class="grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div
        v-for="location in locations"
        :key="location.id"
        @click="navigateToLocation(location.id)"
        class="bg-gray-900 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <h2 class="text-xl font-semibold text-white">{{ location.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useRouter } from "vue-router";

const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      results {
        id
        name
      }
    }
  }
`;

const { result, loading, error, refetch } = useQuery(LOCATIONS_QUERY, null, {
  fetchPolicy: "network-only",
});
const locations = ref([]);
const router = useRouter();

watch(result, (newResult) => {
  if (newResult && newResult.locations) {
    locations.value = newResult.locations.results;
  }
});

const navigateToLocation = (locationId) => {
  router.push({
    name: "LocationDetail",
    params: { id: locationId },
  });
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transform:hover {
  transform: scale(1.05);
}
</style>
