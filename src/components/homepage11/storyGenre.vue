<template>
  <div class="z-50 p-4 flex">
    <!-- First column with another component -->
    <div class="flex-grow-0 mr-4">
      <!-- Insert another component here -->
    </div>

    <!-- Second column with show information -->
    <div class="flex-grow">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">
          Show Information
        </h2>
        <div class="mb-4">
          <h3 class="text-md font-semibold text-gray-700">Storyline:</h3>
          <p class="text-gray-600">{{ show.storyline }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-md font-semibold text-gray-700">Genre:</h3>
          <p class="text-gray-600">{{ show.genre }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-md font-semibold text-gray-700">Creators:</h3>
          <p class="text-gray-600">{{ show.creators }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-md font-semibold text-gray-700">Stars:</h3>
          <p class="text-gray-600">{{ show.stars }}</p>
        </div>
        <div class="mb-4">
          <h3 class="text-md font-semibold text-gray-700">Rating:</h3>
          <p class="text-gray-600">{{ show.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const show = {
  storyline:
    "An animated series that follows the misadventures of an eccentric scientist and his good-hearted but easily influenced grandson.",
  genre: "Animation, Adventure, Comedy",
  creators: "Dan Harmon, Justin Roiland",
  stars: "Justin Roiland, Chris Parnell, Spencer Grammer",
  rating: "TV-14",
};
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.border {
  border-width: 1px;
}

.border-gray-200 {
  border-color: #edf2f7;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.p-4 {
  padding: 1rem;
}

.text-lg {
  font-size: 1.125rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-700 {
  color: #4a5568;
}

.text-gray-600 {
  color: #718096;
}

.text-md {
  font-size: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

/* Animation */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated {
  animation: fadeInRight 0.5s ease-in-out;
}
</style>
