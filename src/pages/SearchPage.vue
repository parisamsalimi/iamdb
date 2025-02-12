<script setup>
import { ref, onMounted } from "vue";

const movies = ref([]);
const visibleMovies = ref([]);
const showAll = ref(false);

const fetchMovies = async () => {
  try {
    const response = await fetch(
      "https://moviesapi.codingfront.dev/api/v1/genres"
    );
    const data = await response.json();
    movies.value = data.slice(0, 20);
    visibleMovies.value = movies.value.slice(0, 4);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

const showMore = () => {
  showAll.value = true;
  visibleMovies.value = movies.value;
};

onMounted(fetchMovies);
</script>
<template>
  <div class="container">
    <div class="hero">
      <h1>IAMDb</h1>
    </div>
    <div class="search">
      <img class="search_icon" src="./assest/img/search 1.png" alt="" />
      <input class="search_bar" type="text" />

      <img class="mic" src="./assest/img/Group 19.png" alt="" />
    </div>

    <div class="movie">
      <ul class="item_movie">
        <li class="list_movie" v-for="movie in visibleMovies">
          <router-link :to="`/movies/${movie.name.toLowerCase()}`">
            {{ movie.name }}
          </router-link>
        </li>
      </ul>
      <button class="btn" v-if="!showAll" @click="showMore">Show More</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 920px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.hero {
  width: 920px;
  margin-top: 172px;
}
.hero h1 {
  color: white;
  font-size: 140px;
  text-align: center;
  font-weight: 900;
}
.search {
  margin-top: -50px;
}
.search_icon {
  position: relative;
  top: 60px;
  left: 20px;
}
.mic {
  position: relative;
  bottom: 35px;
  left: 880px;
}
.search_bar {
  width: 920px;
  height: 48px;
  border-radius: 16px;
  background-color: #222c4f;
  border: none;
}
.movie {
  width: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 27px; */
  margin-top: 30px;
}
.item_movie {
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  padding: 0;
  margin: 0;
}
.list_movie {
  background-color: #222c4f;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
}
.btn {
  background-color: #222c4f;
  color: white;
  border-radius: 8px;
  padding: 5px 10px;
  border: none;
  word-spacing: 2px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
