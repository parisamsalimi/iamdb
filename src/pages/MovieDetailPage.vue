<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "@/composition/useFetch";
import { useFavoritesStore } from "@/stores/favorites";

import point from "@/assets/point.svg";
import clk from "@/assets/clk.svg";
import icon from "@/assets/icon.svg"; 
import like from "@/assets/like.svg"; 
import MovieDetailPageSkeleton from "@/components/MovieDetailPageSkeleton.vue";

const router = useRouter();
const route = useRoute();
const favoritesStore = useFavoritesStore();

const id = route.params.id;
const url = computed(() => `https://moviesapi.codingfront.dev/api/v1/movies/${id}`);
const { data: movie, loading } = useFetch(url);

const goBack = () => {
  router.go(-1);
};


const backgroundStyle = computed(() => {
  return movie.value && movie.value.images
    ? {
        backgroundImage: `linear-gradient(to top, #070d23 0%, #070d2300 100%), url(${movie.value.images[0]})`,
      }
    : {};
});


const isFavorite = computed(() => movie.value && favoritesStore.isFavorite(movie.value.id));


const toggleFavorite = () => {
  if (movie.value) {
    favoritesStore.toggleFavorite(movie.value);
  }
};


const buttonClicked = ref(false);


const changeButtonColor = () => {
  buttonClicked.value = !buttonClicked.value;
};

</script>
<template>
  <MovieDetailPageSkeleton v-if="loading" />
  <template v-else>
    <div :style="backgroundStyle" class="container background_img">
      <div class="wrapper">
        <div class="head_pointer">
          <img @click="goBack" :src="point" alt="pointer" />
        </div>

        <div class="content">
          <div class="image_wrap">
            <img :src="movie.poster" alt="movie_poster" />

            <div class="rate_wrapper">
              <div class="rate">
                <div class="rate_circle">
                  <svg viewBox="0 0 100 100">
                    <circle class="bg-circle" cx="50" cy="50" r="40"></circle>
                    <circle class="progress-circle" cx="50" cy="50" r="40"></circle>
                    <text x="50" y="55" text-anchor="middle" class="rating-text">
                      {{ movie.imdb_rating }}
                    </text>
                  </svg>
                </div>
                <div class="votes_wrap">
                  <strong class="imdb_votes">{{ movie.imdb_votes }}</strong>
                  <br />
                  <span class="imdb_text">ratings on IMDB</span>
                </div>
              </div>

              <div class="rate_description">
                <div class="info_about_movie">94% on Rotten Tomatoes</div>
                <div class="info_about_movie">84/100 on Metacritic</div>
              </div>
            </div>
          </div>

          <div class="detail_wrap">
            <div class="title_wrap">
              <h1 class="wrapper_title">{{ movie.title }}</h1>

              
              <img
                class="favorite_icon"
                :src="isFavorite ? like : icon"
                alt="Favorite Icon"
                @click="toggleFavorite"
              />
            </div>

            <span class="genre" v-for="(genre, index) in movie.genres" :key="index">
              {{ genre }}
              <span v-if="index !== movie.genres.length - 1">, </span>
            </span>

            <p class="description">{{ movie.plot }}</p>

            <div class="movie_detail">
              <div class="detail_item">{{ movie.rated }}</div>
              <div class="detail_item">{{ movie.year }}</div>
              <div class="detail_item">
                <img :src="clk" alt="" />
                {{ movie.runtime }}
              </div>
            </div>

            <div class="moives_information">
              <h2>Details</h2>
              <div class="information_item">
                <h3>Directors</h3>
                <span>{{ movie.director }}</span>
              </div>
              <div class="information_item">
                <h3>Writers</h3>
                <span>{{ movie.writer }}</span>
              </div>
              <div class="information_item">
                <h3>Actors</h3>
                <span>{{ movie.actors }}</span>
              </div>
              <div class="information_item">
                <h3>Country</h3>
                <span>{{ movie.country }}</span>
              </div>
              <div class="information_item">
                <h3>Language</h3>
                <span>{{ movie.language }}</span>
              </div>
              <div class="information_item">
                <h3>Awards</h3>
                <span>{{ movie.awards }}</span>
              </div>
            </div>
          </div>
        </div>

        
        <button 
          class="button_wrap" 
          :style="{ backgroundColor: buttonClicked ? '#222C4F' : '' }" 
          @click="changeButtonColor"
        >
          {{ buttonClicked ? "Remove from Favorite" : "Add to Favorite" }}
        </button>
      </div>
    </div>
  </template>
</template>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.background_img {
  padding: 50px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 300px;
}
.wrapper {
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.head_pointer img {
  width: 40px;
  height: 40px;
  background-color: var(--l-navy);
  border-radius: 16px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.button_wrap {
  display: none;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 70px;
  margin-top: 150px;
}

.image_wrap {
  width: 210px;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.image_wrap img {
  border-radius: 18px;
  box-shadow: 0, 4px, 15px, 0 var(--black);
}
.detail_wrap {
  flex: 1;
  height: 300px;
}

.image_wrap > img {
  width: 210px;
}

.title_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title_wrap h1 {
  margin: 0;
}

.detail_wrap > .genre {
  color: var(--gray);
}

.detail_wrap > .description {
  color: var(--l-gray);
}

.movie_detail {
  display: flex;
  gap: 10px;
}
.detail_item {
  padding: 6px 12px;
  background-color: var(--l-navy);
  border-radius: 8px;
}

.information_item {
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px var(--l-navy);
  align-items: center;
}

.information_item h3 {
  width: 150px;
}

.information_item > span {
  flex: 1;
  color: var(--l-gray);
}

.rate_wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.rate {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.rate_circle {
  width: 80px;
  height: 80px;
  position: relative;
  margin-top: -10px;
}

.rate_description {
  text-align: left;
  margin-top: 30px;
}

svg {
  width: 100%;
  height: 100%;
}

.bg-circle {
  fill: none;
  stroke: var(--l-black);
  stroke-width: 8;
}

.votes_wrap {
  margin-top: 13.5px;
  margin-left: 18px;
}
.imdb_votes {
  font-size: 16px;
  font-weight: 700;
  font-family: "Roboto";
}
.imdb_text {
  font-size: 14px;
  font-weight: 400;
  opacity: 60%;
  font-family: "Roboto";
}

.progress-circle {
  fill: none;
  stroke: var(--purple);
  stroke-width: 8;
  stroke-dasharray: 251;
  stroke-dashoffset: calc(251 - (251 * 91) / 100);
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.rating-text {
  fill: var(--white);
  font-size: 24px;
  font-weight: 700;
  font-weight: bold;
}

.info_about_movie {
  opacity: 50%;
  font-weight: 400;
  font-size: 13px;
  word-spacing: 2px;
}

.title_wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.favorite_icon {
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: transform 0.2s;
}

.favorite_icon:hover {
  transform: scale(1.2);
}


@media screen and (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }
  .image_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
  .button_wrap {
    display: block;
    width: calc(100% - 30px);
    height: 40px;
    background-color: var(--purple);
    border-radius: 12px;
    position: fixed;
    color: var(--white);
    font-weight: 400px;
    font-size: 14px;
    padding: 12px 24px;
    position: fixed;
    z-index: 1;
    border: none;
    bottom: 20px;
  }
  .title_wrap img {
    display: none;
  }
  .image_wrap > img {
    width: 100%;
    margin: 30px auto;
  }

  .detail_wrap {
    flex: 1;
    height: 300px;
  }
  .moives_information {
    display: none;
  }
  .background_img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
  .rate_wrapper {
    flex-direction: row;
    align-items: center;
  }
  .rate_description {
    margin-left: 30px;
    margin-top: 0px;
  }
}
</style>
