<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useSpeechRecognition } from "@vueuse/core";

import searchIcon from "@/assets/searchIcon.svg";
import mic from "@/assets/mic.svg";

const searchQuery = ref("");
const router = useRouter();


const { isListening, result, start, stop } = useSpeechRecognition();


watch(result, (newResult) => {
  if (newResult) {
    searchQuery.value = newResult; 
    searchMovies(); 
  }
});

const searchMovies = () => {
  if (!searchQuery.value.trim()) return;

  router.push({
    name: "SearchPage",
    params: { genre: searchQuery.value.trim() },
    query: { q: searchQuery.value },
  });
};


const toggleListening = () => {
  if (isListening.value) {
    stop();
  } else {
    start();
  }
};
</script>

<template>
  <div class="search">
    <button class="input_icon" @click="searchMovies">
      <img :src="searchIcon" alt="Search Icon" />
    </button>
    <input
      class="search_input"
      v-model="searchQuery"
      @keyup.enter="searchMovies"
      placeholder="Search for movies..."
    />
    <button id="microphone" class="input_icon" @click="toggleListening">
      <img :src="mic" alt="Mic Icon" />
    </button>
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
  background-color: var(--l-navy);
}

.input_icon {
  all: unset;
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input_icon img {
  cursor: pointer;
}
#microphone {
  border-left: 1px solid var(--navy);
}
.search_input {
  background-color: var(--l-navy);
  border: none;
  height: 48px;
  flex: 1;
}

.search_bar:focus {
  outline: none;
}

.search_line {
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background-color: var(--navy);
}
</style>
