import SearchPage from "./pages/SearchPage.vue";
import MovieDetailPage from "./pages/MovieDetailPage.vue";
import MovieListPage from "./pages/MovieListPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: SearchPage,
  },
  {
    path: "/movies/:genre",
    name: "MovieListPage",
    component: MovieListPage,
  },
  {
    path: "/movie/:movieId",
    name: "MovieDetailPage",
    component: MovieDetailPage,
  },
];

export default routes;
