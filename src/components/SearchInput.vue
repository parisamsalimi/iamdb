<script setup>
import { ref } from "vue";

const query = ref("");

const fetchMovies = async () => {
  if (!query.value.trim()) {
    return;
  }

  try {
    const response = await fetch(
      `https://moviesapi.codingfront.dev/api/v1/movies?q=${query.value}&page=1`
    );
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
console.log("hello");
</script>

<template>
  <div class="search">
    <img class="search_icon" src="./assest/img/search 1.png" alt="" />
    <input
      v-model="query"
      class="search_bar"
      type="text"
      @keyup.enter="fetchMovies"
    />
    <img class="mic" src="./assest/img/Group 19.png" alt="" />
  </div>
</template>

<style>
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.search_bar {
  width: 100%;
  padding: 10px;
}
.search {
  padding-top: 22px;
  margin-left: auto;
  margin-right: auto;
}
.search_icon {
  position: relative;
  top: 60px;
  left: 2