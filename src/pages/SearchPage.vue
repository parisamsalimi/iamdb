<script setup>
import { ref, onMounted } from "vue";
import SearchInput from "@/components/SearchInput.vue";

const movies = ref([]);
const visibleMovies = ref([]);
const showAll = ref(false);
const loading = ref(true);

const fetchMovies = async () => {
  try {
    const response = await fetch(
      "https://moviesapi.codingfront.dev/api/v1/genres"
    );
    const data = await response.json();
    movies.value = data.slice(0, 20);
    visibleMovies.value = movies.value.slice(0, 4);
    loading.value = false;
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

    <SearchInput />
    <div class="movie">
      <div class="item_movie" v-for="movie in visibleMovies">
        <router-link :to="`/movies/${movie.name.toLowerCase()}`">
          {{ movie.name }}
        </router-link>
      </div>
      <button
        class="movie_show_more_btn"
        v-if="!showAll && !loading"
        @click="showMore"
      >
        Show More >
      </button>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.hero h1 {
  color: var(--white);
  font-size: 100px;
  text-align: center;
  padding-top: 150px;
  font-family: "Inter";
  font-weight: 900;
}
.search {
  margin-top: -60px;
}
.movie {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 10px;
  justify-content: center;
}
.item_movie {
  background-color: var(--l-navy);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
}
.item_movie a {
  color: var(--white);
  text-decoration: none;
}
.movie_show_more_btn {
  background-color: var(--l-navy);
  color: var(--white);
  border-radius: 8px;
  padding: 6px 12px;
  border: none;
  word-spacing: 2px;
  font-size: 12px;
  cursor: pointer;
}
</style>
