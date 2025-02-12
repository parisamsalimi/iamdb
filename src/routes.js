import SearchPage from "@/pages/SearchPage.vue";
import MovieListPage from "@/pages/MovieListPage.vue";
import MovieDetailPage from "@/pages/MovieDetailPage.vue";

const routes = [
    {
      path: '/' ,
      component: SearchPage ,
    }, 
    {
      path: '/movies' ,
      component: MovieListPage ,
    },
    {
      path: '/movie/:id' ,
      component : MovieDetailPage ,
    }
];

export default routes;