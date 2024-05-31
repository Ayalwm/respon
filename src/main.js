// src/main.js
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import App from "./App.vue";
import router from "./router";
import "./style.css";

// Define the GraphQL endpoint
const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

// Create a new Apollo Client instance
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Create the Vue app instance
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

// Use the router and mount the app
app.use(router).mount("#app");
