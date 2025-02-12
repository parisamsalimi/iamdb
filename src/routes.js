import SearchPage from "./pages/SearchPage.vue";
import MovieDetailPage from "./pages/MovieDetailPage.vue";
import MovieListPage from "./pages/MovieListPage.vue";

const routes = [
  {
    path: "/",
    component: SearchPage,
  },
  {
    path: "/movies/:genre",
    component: MovieListPage,
  },
  {
    path: "/movie/:id",
    component: MovieDetailPage,
  },
];

export default routes;
