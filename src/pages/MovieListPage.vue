<script setup>
import SearchInput from "@/components/SearchInput.vue";

import MovieListPageSkeleton from "@/components/MovieListPageSkeleton.vue";

import point from "@/assets/point.svg";
import icon from "@/assets/icon.svg";
import star from "@/assets/star.svg";
import { ref, watch, onMounted } from "vue";

import { useRoute, useRouter } from "vue-router";

const movies = ref([]);
const loading = ref(true); 

const route = useRoute();
const router = useRouter();

const genre = route.params.genre;

onMounted(async () => {
  try {
    const response = await fetch(
      `https://moviesapi.codingfront.dev/api/v1/genres/${genre}/movies?page={page}`
    );
    const moviesList = await response.json();
    movies.value = moviesList.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    loading.value = false;
  }
});
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="wrapper">
    <div class="head">
      <router-link to="/">
        <div class="head_pointer">
          <img :src="point" alt="" />
        </div>
      </router-link>
      <div class="head_text">
        <h1 class="head_title">Result</h1>
        <span class="head_detail">for “Search Query”</span>
      </div>
      <div></div>
    </div>

    <SearchInput />

   
    <MovieListPageSkeleton v-if="loading" />


    <template v-else></template>

    <template v-if="movies.length > 0">
      <div v-for="movie in movies" :key="movie.id">
        <router-link class="movie_card" :to="`/movie/${movie.id}`">
          <div class="movie_card_img"><img :src="movie.poster" alt="" /></div>
          <div class="movie_card_text">
            <div class="movie_card_text_title">
              <div class="movie_card_text_title_detail">
                <h2>{{ movie.title }}</h2>
                <img
                  class="movie_card_text_title_favorite"
                  :src="icon"
                  alt=""
                />
              </div>
              <span
                class="movei_card_genre"
                v-for="(genre, index) in movie.genres"
                :key="index"
                >{{ genre }}
                <span v-if="index !== movie.genres.length - 1">, </span>
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
      </div>
    </template>
    <template v-else>
      <div class="not-found">Not movies found for : "{{ genre }}"</div>
    </template>
  </div>
</template>
<style scoped>
.head {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 32px;
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
