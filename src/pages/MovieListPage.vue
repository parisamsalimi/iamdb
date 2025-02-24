<script setup>
import SearchInput from "@/components/SearchInput.vue";

import point from "@/assets/point.svg";
import icon from "@/assets/icon.svg";
import star from "@/assets/star.svg";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const movies = ref([]);

const route = useRoute();
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
</script>

<template>
  <div class="wrapper">
    <div class="head">
      <div class="head_pointer">
        <img :src="point" alt="" />
      </div>
      <div class="head_text">
        <h1 class="head_title">Result</h1>
        <span class="head_detail">for “Search Query”</span>
      </div>
      <div></div>
    </div>

    <SearchInput />

    <template v-if="movies.length > 0">
      <div class="movie_card" v-for="movie in movies" :key="movie.id">
        <div class="movie_card_img"><img :src="movie.poster" alt="" /></div>
        <div class="movie_card_text">
          <div class="movie_card_text_title">
            <div class="movie_card_text_title_detail">
              <h2>{{ movie.title }}</h2>
              <img class="movie_card_text_title_favorite" :src="icon" alt="" />
            </div>
            <span v-for="(genre, index) in movie.genres" :key="index"
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
      </div>
    </template>
    <template v-else>
      <div class="not-found">Not movies found for : "{{ genre }}"</div>
    </template>
  </div>
</template>
<style scoped>
.head {
  /* border: solid 1px red; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head_text {
  /* border: solid 1px red; */
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
  background-color: #222c4f;
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
  background-color: #222c4f;
  border-radius: 16px;
  padding: 10px;
}
.wrapper {
  /* border: solid 1px yellow; */
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.movie_card {
  /* border: solid 1px white; */
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 32px;
}
.movie_card_img {
  width: 7.625rem;
  height: 7.625rem;
  /* border: solid 1px blue; */
}
.movie_card_img img {
  width: 100%;
  height: 100%;
}
.movie_card_text {
  /* border: solid 1px blue; */
  flex: 1;
}

.movie_card_detail {
  /* border: solid 1px yellow; */
  /* margin-top: 5px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
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
