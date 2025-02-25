<script setup>
import point from "@/assets/point.svg";
import movie_img from "@/assets/movie_img.jpg";
import desktop from "@/assets/desktop.jpg";
import icon from "@/assets/icon.svg";
import clk from "@/assets/clk.svg";
</script>
<template>
  <div class="container background_img">
    <div class="wrapper">
      <div class="head_pointer">
        <img :src="point" alt="" />
      </div>
      <div class="content">
        <div class="image_wrap">
          <img :src="desktop" alt="" />
          <div class="rate_wrapper">
            <div class="rate">
              <div class="rate_circle">
                <svg viewBox="0 0 100 100">
                  <circle class="bg-circle" cx="50" cy="50" r="40"></circle>
                  <circle
                    class="progress-circle"
                    cx="50"
                    cy="50"
                    r="40"
                  ></circle>
                  <text x="50" y="55" text-anchor="middle" class="rating-text">
                    9.1
                  </text>
                </svg>
              </div>
              <div class="votes_wrap">
                <strong class="imdb_votes">2,528,462</strong>
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
            <h1 class="wrapper_title">The Dark Knight</h1>
            <img :src="icon" alt="" />
          </div>
          <span
            class="genre"
            v-for="(genre, index) in ['drama', 'action', 'parisa', 'holand']"
            :key="index"
            >{{ genre }}
            <span>, </span>
          </span>

          <p class="description">
            When the menace known as the Joker wreaks havoc and chaos on the
            people of Gotham, Batman must accept one of the greatest
            psychological and physical tests of his ability to fight injustice.
          </p>

          <div class="movie_detail">
            <div class="detail_item">PG-13</div>
            <div class="detail_item">2008</div>
            <div class="detail_item">
              <img :src="clk" alt="" />
              152 min
            </div>
          </div>

          <div class="moives_information">
            <h2>Details</h2>
            <div class="information_item">
              <h3>Directors</h3>
              <span>Christopher Nolan</span>
            </div>
            <div class="information_item">
              <h3>Writers</h3>
              <span>Jonathan Nolan, Christopher Nolan, David S. Goyer</span>
            </div>
            <div class="information_item">
              <h3>Actors</h3>
              <span>Christian Bale, Heath Ledger, Aaron Eckhart</span>
            </div>
            <div class="information_item">
              <h3>Country</h3>
              <span>United States, United Kingdom</span>
            </div>
            <div class="information_item">
              <h3>Language</h3>
              <span>English, Mandarin</span>
            </div>
            <div class="information_item">
              <h3>Awards</h3>
              <span>Won 2 Oscars. 159 wins & 163 nominations total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.background_img {
  background-image: linear-gradient(to top, #070d23 0%, #070d2300 100%),
    url("@/assets/dark.jpeg");
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
  background-color: #222c4f;
  border-radius: 16px;
  padding: 10px;
  text-align: center;
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
  box-shadow: 0, 4px, 15px, 0 #00000040;
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
  color: #737883;
}

.detail_wrap > .description {
  color: #9c9fa8;
}

.movie_detail {
  display: flex;
  gap: 10px;
}
.detail_item {
  padding: 6px 12px;
  background-color: #222c4f;
  border-radius: 8px;
}

.information_item {
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #222c4f;
  align-items: center;
}

.information_item h3 {
  width: 150px;
}

.information_item > span {
  flex: 1;
  color: #9c9fa8;
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
  stroke: #444;
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
  stroke: #a347ff;
  stroke-width: 8;
  stroke-dasharray: 251;
  stroke-dashoffset: calc(251 - (251 * 91) / 100);
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.rating-text {
  fill: white;
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
