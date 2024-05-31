import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/homepage11/HelloWorld.vue";
import EpisodeDetail from "../components/episodepageview/EpisodeDetail.vue";
import LocationDetail from "../components/locationpageview/LocationDetail.vue";
import CharacterDetail from "../components/characterpageview/CharacterDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
    props: (route) => ({
      selectedComponent: route.query.selectedComponent,
    }),
  },
  {
    path: "/episode/:id",
    name: "EpisodeDetail",
    component: EpisodeDetail,
    props: true,
  },
  {
    path: "/location/:id",
    name: "LocationDetail",
    component: LocationDetail,
    props: true,
  },
  {
    path: "/character/:id",
    name: "CharacterDetail",
    component: CharacterDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
