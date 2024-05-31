<!-- SidebarNavigation.vue -->
<template>
  <div
    class="fixed top-0 left-0 h-screen w-48 bg-white shadow-md flex flex-col justify-between">
    <nav class="flex flex-col space-y-4 p-4 flex-grow justify-center">
      <button
        @click="handleSelectComponent('episodes')"
        :class="{ 'bg-gray-200': selectedComponent === 'episodes' }"
        class="text-gray-800 hover:text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Episodes
      </button>
      <button
        @click="handleSelectComponent('characters')"
        :class="{ 'bg-gray-200': selectedComponent === 'characters' }"
        class="text-gray-800 hover:text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Characters
      </button>
      <button
        @click="handleSelectComponent('locations')"
        :class="{ 'bg-gray-200': selectedComponent === 'locations' }"
        class="text-gray-800 hover:text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Locations
      </button>
    </nav>
    <div class="p-4">
      <!-- Additional footer content can go here -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  selectComponent: Function,
});

const selectedComponent = ref("episodes"); // Default value

const handleSelectComponent = (component) => {
  selectedComponent.value = component;
  props.selectComponent(component);
};
</script>

<style scoped>
/* Add custom styles for the sidebar here */
</style>
