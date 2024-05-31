<template>
<div class="bg-black">
  <!-- Main Content -->
  <div class="pt-24 p-6">
    <!-- Show Banner -->
    <div class="relative mb-12" >
      <carouselSwiper/>
      <div class="absolute bottom-4 left-4 text-white">
        <h1 class="text-4xl font-bold">Rick and Morty</h1>
        <div class="flex items-center">
          <span class="text-yellow-400 text-2xl">★ 9.1</span>
          <span class="ml-4 text-xl">2013</span>
        </div>
        <h2 class="text-2xl font-bold mb-4">Overview</h2>
        <p class="mt-4 max-w-4xl">
          The series follows the misadventures of an eccentric and alcoholic
          scientist, Rick Sanchez, and his good-hearted but easily influenced
          grandson, Morty Smith. Rick is a genius inventor who has created
          numerous gadgets and portals that allow them to travel across
          different dimensions and universes. Morty, often reluctantly, joins
          Rick on these dangerous and bizarre adventures.
        </p>
      </div>
    </div>

    <!-- Overview -->
    <div class="bg-black text-white p-6 rounded-lg shadow-md mb-12">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-semibold">Genre</h3>
          <p>Animation,<p> Adventure, Comedy</p></p>
        </div>
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-semibold">Creators</h3>
          <p>Dan Harmon, <p>Justin Roiland</p></p>
        </div>
        <div>
          <h3 class="text-xl font-semibold">Stars</h3>
          <p>Justin Roiland, <p>Chris Parnell, <p>Spencer Grammer</p></p></p>
        </div>
      </div>
    </div>

    <!-- Episodes -->
    <div ref="episodes" class="mb-12">
      <h2 class="text-2xl text-white font-bold mb-4">Episodes</h2>
      <Episodes />
    </div>

    <!-- Characters -->
    <div ref="characters" class="mb-12">
      <h2 class="text-2xl text-white font-bold mb-4">Characters</h2>
      <Characters />
    </div>

    <!-- Locations -->
    <div ref="locations">
      <h2 class="text-2xl text-white font-bold mb-4">Locations</h2>
      <Locations />
    </div>
  </div>
  </div>
  
  <footer
    class="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 text-center">
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

<script setup>
import { ref } from "vue";
import Episodes from "./episodeview.vue";
import Characters from "./CharacterView.vue";
import Locations from "./LocationView.vue";
import carouselSwiper from "./carouselSwiper.vue";

const episodes = ref(null);
const characters = ref(null);
const locations = ref(null);

const scrollTo = (component) => {
  if (component === "episodes" && episodes.value) {
    episodes.value.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (component === "characters" && characters.value) {
    characters.value.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (component === "locations" && locations.value) {
    locations.value.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<style scoped>

body{
  background-color: #000000;
}
</style>
