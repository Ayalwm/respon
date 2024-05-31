<script>
import {
  VueFlux,
  FluxPreloader,
  FluxControls,
  FluxPagination,
  FluxImage,
  Img,
  Size,
  Wave,
} from "vue-flux";
import { reactive, shallowReactive } from "vue";

export default {
  components: {
    VueFlux,
    FluxPreloader,
    FluxControls,
    FluxPagination,
    FluxImage,
  },
  setup() {
    const options = reactive({
      allowFullscreen: false,
      allowToSkipTransition: true,
      // autohideTime: 1500,
      autoplay: true,
      bindKeys: false,
      delay: 2000,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    });
    const rscs = shallowReactive([
      new Img(
        "https://th.bing.com/th/id/R.4e9339e3d3ea22b272df24d72001b0f9?rik=lTQWQQPQjYpFJw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40400000%2fRick-And-Morty-rick-and-morty-40438469-1920-1080.jpg&ehk=TzPDsDMYvdGGRW6gmvZmjijWMvZT%2f3R224Wt42kgHCE%3d&risl=&pid=ImgRaw&r=0"
      ),
      new Img(
        "https://th.bing.com/th/id/R.377c5fabba9c5291d7ee68d51da52819?rik=ycYS1Thv9QI0YA&pid=ImgRaw&r=0"
      ),
      new Img(
        "https://static.hollywoodreporter.com/sites/default/files/2015/08/rick_and_morty_s02_still.jpg"
      ),
      new Img(
        "https://i.pinimg.com/originals/9b/6d/53/9b6d531d4f4717f9ad7fe55d09d6854a.jpg"
      ),
    ]);

    const rsc = new Img(
      "https://th.bing.com/th/id/R.4e9339e3d3ea22b272df24d72001b0f9?rik=lTQWQQPQjYpFJw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40400000%2fRick-And-Morty-rick-and-morty-40438469-1920-1080.jpg&ehk=TzPDsDMYvdGGRW6gmvZmjijWMvZT%2f3R224Wt42kgHCE%3d&risl=&pid=ImgRaw&r=0"
    );
    const a = new Img(
      "https://th.bing.com/th/id/R.377c5fabba9c5291d7ee68d51da52819?rik=ycYS1Thv9QI0YA&pid=ImgRaw&r=0"
    );
    const b = new Img(
      "https://static.hollywoodreporter.com/sites/default/files/2015/08/rick_and_morty_s02_still.jpg"
    );
    const c = new Img(
      "https://i.pinimg.com/originals/9b/6d/53/9b6d531d4f4717f9ad7fe55d09d6854a.jpg"
    );

    const size = new Size({
      width: 500,
      height: 200,
    });

    const transitions = shallowReactive([Wave]);

    return {
      options,
      rscs,
      rsc,
      size,
      transitions,
      a,
      b,
      c,
    };
  },
};
</script>

<template>
  <div class="vue-flux-container">
    <!-- <FluxImage :rsc="rsc" :size="size" />
    <FluxImage :rsc="a" :size="size" /> -->
    <!-- <FluxImage :rsc="b" :size="size" />
    <FluxImage :rsc="c" :size="size" />
    <FluxImage :rsc="d" :size="size" /> -->

    <VueFlux :options="options" :rscs="rscs" :transitions="transitions">
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>
    </VueFlux>
  </div>
</template>

<style scoped>
.vue-flux-container {
  max-width: 600px; /* Ensure the container size matches the image size */
  margin: auto;
  padding-left: 400px;
  padding-top: 200px;
  padding-bottom: 200px;
}

.vue-flux-container img {
  width: 100%;
  height: auto;
}
</style>
