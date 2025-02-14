<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import searchIcon from "@/assets/searchIcon.svg";
import mic from "@/assets/mic.svg";
const searchQuery = ref("");
const router = useRouter();

const searchMovies = () => {
  if (!searchQuery.value) return;

  router.push({
    name: "MovieListPage",
    params: { genre: searchQuery.value.trim() },
  });
};
</script>
<template>
  <div class="search">
    <button class="input_icon" @click="searchMovies">
      <img :src="searchIcon" alt="" />
    </button>
    <input
      class="search_bar"
      v-model="searchQuery"
      @keyup.enter="searchMovies"
      placeholder=""
    />
    <div id="microphone" class="input_icon">
      <img :src="mic" alt="" />
    </div>
  </div>
</template>

<style>
.search {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border-radius: 16px;
  background-color: #222c4f;
}

.input_icon {
  all: unset;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#microphone {
  border-left: 1px solid #070d23;
}
.search_bar {
  background-color: #222c4f;
  border: none;
  height: 48px;
  flex: 1;
}

.search_bar:focus {
  outline: none;
}
​.search_icon {
  z-index: 1;
  left: 10px;
}
.search_line {
  position: absolute;
  top: 50%;
  right: 50px; /* Adjust spacing */
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background-color: #070d23;
}
</style>
