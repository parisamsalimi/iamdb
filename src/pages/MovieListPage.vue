<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useFavoritesStore } from "@/stores/favorites";

import SearchInput from "@/components/SearchInput.vue";
import MovieListPageSkeleton from "@/components/MovieListPageSkeleton.vue";
import point from "@/assets/point.svg";
import icon from "@/assets/icon.svg";
import like from "@/assets/like.svg";
import star from "@/assets/star.svg";

const route = useRoute();
const genre = ref(route.params.genre || "");
const query = ref(route.query.q || "");
const page = ref(1);
const movies = ref([]);
const loading = ref(false);
const allLoaded = ref(false);

watch(
  () => route.query.q,
  (newQuery) => {
    query.value = newQuery;
    resetPagination();
  }
);

watch(
  () => route.params.genre,
  (newGenre) => {
    genre.value = newGenre;
    resetPagination();
  }
);

const fetchUrl = computed(() => {
  if (query.value) {
    return `https://moviesapi.codingfront.dev/api/v1/movies?q=${query.value}&page=${page.value}`;
  } else if (genre.value) {
    return `https://moviesapi.codingfront.dev/api/v1/genres/${genre.value}/movies?page=${page.value}`;
  }
  return "";
});

const loadMovies = async () => {
  if (loading.value || allLoaded.value || !fetchUrl.value) return;
  loading.value = true;
  console.log("Fetching:", fetchUrl.value);

  try {
    const response = await fetch(fetchUrl.value);
    const result = await response.json();
    console.log("Fetched Data:", result);

    if (result && result.data && result.data.length) {
      movies.value.push(...result.data);
      page.value++;
    } else {
      allLoaded.value = true;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
  
  loading.value = false;
};

const resetPagination = () => {
  console.log("Resetting Pagination...");
  page.value = 1;
  movies.value = [];
  allLoaded.value = false;
  loadMovies();
};

const handleScroll = () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.offsetHeight - 100
  ) {
    loadMovies();
  }
};

watch(fetchUrl, (newUrl) => {
  console.log("New Fetch URL:", newUrl);
});

onMounted(() => {
  loadMovies();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const favoritesStore = useFavoritesStore();

const toggleFavorite = (movie) => {
  favoritesStore.toggleFavorite(movie);
};

const isFavorite = (movieId) => {
  return favoritesStore.isFavorite(movieId);
};
</script>

<template>
  <div class="wrapper">
    <div class="head">
      <router-link to="/">
        <div class="head_pointer">
          <img :src="point" alt="Back" />
        </div>
      </router-link>
      <div class="head_text">
        <h1 class="head_title">Result</h1>
        <span class="head_detail">for “{{ query || genre }}”</span>
      </div>
      <div></div>
    </div>

    <SearchInput />

    <MovieListPageSkeleton v-if="loading && movies.length === 0" />

    <template v-else>
      <template v-if="movies.length > 0">
        <div v-for="movie in movies" :key="movie.id" class="movie_card_wrapper">
          <router-link class="movie_card" :to="`/movie/${movie.id}`">
            <div class="movie_card_img"><img :src="movie.poster" alt="" /></div>
            <div class="movie_card_text">
              <div class="movie_card_text_title">
                <div class="movie_card_text_title_detail">
                  <h2>{{ movie.title }}</h2>
                </div>
                <span
                  class="movei_card_genre"
                  v-for="(genre, index) in movie.genres"
                  :key="index"
                >
                  {{ genre }}<span v-if="index !== movie.genres.length - 1">, </span>
                </span>
              </div>
              <div class="movie_card_detail">
                <span>{{ movie.year }}</span>
                <div class="dot"></div>
                <span>{{ movie.country }}</span>
                <div class="dot"></div>
                <img :src="star" alt="" />
                <span>{{ movie.imdb_rating }}</span>
              </div>
            </div>
          </router-link>
          <img
            class="movie_card_text_title_favorite favorite_icon"
            :src="isFavorite(movie.id) ? like : icon"
            alt="Favorite Icon"
            @click="toggleFavorite(movie)"
          />
        </div>
      </template>

      <template v-else>
        <div class="not-found">No movies found for: "{{ query || genre }}"</div>
      </template>
    </template>

    <MovieListPageSkeleton v-if="loading && movies.length > 0" />
  </div>
</template>


<style scoped>
.head {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
}
.head_text {
  text-align: center;
}
.head_title {
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
}
.dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 100%;
  background-color: var(--l-navy);
}
.head_detail {
  font-weight: 300;
  font-size: 12px;
  position: relative;
  top: -15px;
}
.head_pointer {
  width: 40px;
  height: 40px;
  background-color: var(--l-navy);
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
}
.wrapper {
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.movie_card {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 32px;
  padding-bottom: 20px;
  border-bottom: solid 1px var(--l-navy);
  text-decoration: none;
  color: var(--white);
}

.movie_card_img {
  width: 7.625rem;
  height: 7.625rem;
}
.movie_card_img img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.movie_card_text {
  flex: 1;
}

.movie_card_detail {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.movei_card_genre {
  opacity: 40%;
  font-size: 12px;
}
.movie_card_text_title_detail > h2 {
  margin-bottom: 0;
}

.movie_card_detail_list {
  display: flex;
}
.movie_card_text_title_detail {
  display: flex;
  justify-content: space-between;
}
.movie_card_text_title_favorite img {
  cursor: pointer;
}
.movie_card_wrapper {
  position: relative;
}
.favorite_icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;
}

.favorite_icon:hover {
  transform: scale(1.2);
}
.movie_card_detail_item {
  display: flex;
  justify-content: space-between;
}

.not-found {
  margin-top: 65px;
  text-align: center;
}

@media screen and (min-width: 1440px) {
  .head_text {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
