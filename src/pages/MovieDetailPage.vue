<script setup>
import point from "@/assets/point.svg";
import movie_img from "@/assets/movie_img.jpg"
</script>
<template>
  <div class="container">
    <div class="head_pointer">
      <img :src="point" alt="" />
    </div>
    <div class="wrapper">
      <h1 class="wrapper_title">The Dark Knight</h1>
      <span class="wrapper_title_genre">Action, Crime, Drama</span>
      <div class="wrapper_plot">
        <p>
          When the menace known as the Joker wreaks havoc and chaos on the
          people of Gotham, Batman must accept one of the greatest psychological
          and physical tests of his ability to fight injustice.
        </p>
      </div>
      <div class="wrapper_movie_detail">
        <ul class="movie_detail">
          <li class="detail_item">PG-13</li>
          <li class="detail_item">2008</li>
          <li class="detail_item">152 min</li>
        </ul>
      </div>
      <div class="wrapper_info">
        <div class="wrapper_info_rate">
          <div class="info_rate_circle">
            <svg viewBox="0 0 100 100">
              <circle class="bg-circle" cx="50" cy="50" r="40"></circle>
              <circle class="progress-circle" cx="50" cy="50" r="40"></circle>
              <text x="50" y="55" text-anchor="middle" class="rating-text">
                9.1
              </text>
            </svg>
          </div>
          <div class="wrapper_info_votes">
            <strong class="imdb_votes">2,528,462</strong>
            <br>
            
            <span class="imdb_text">ratings on IMDB</span>
          </div>
        </div>
        <div class="wrapper_info_about">
          <span class="info_about_movie">94% on Rotten Tomatoes
            84/100 on Metacritic</span>
        </div>
      </div>
      <div class="wrapper_movie_img">
        <img :src="movie_img" alt="">
        <button class="wrapper_favorite_btn">Add to Favorite</button>

      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-image: linear-gradient(to top, #070d23 0%, #070d2300 100%),
    url("@/assets/dark.jpeg");
  width: 100%;
  height: 379px; /* Ensures full screen height */
  padding: 30px 0; /* Remove excessive bottom padding */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center; /* Ensures the image aligns to the top */
  margin: 0 auto;
}
.head_pointer img {
  width: 40px;
  height: 40px;
  background-color: #222c4f;
  border-radius: 16px;
  padding: 10px;
  text-align: center;
  position: relative;
  left: 20px;
}
.wrapper {
  width: 100%;
  height: 1362px;
  margin-top: 72px;
}

.wrapper_title {
  font-size: 48px;
  font-weight: 700;
  line-height: 58.09px;
  text-align: left;
  padding-left: 10px;
  margin: 0;
  font-family: "Inter";
  
}
.wrapper_title_genre {
  font-family: "Inter";
  font-size: 12px;
  opacity: 40%;
  line-height: 14.52px;
  padding-left: 12px;
}
.wrapper_plot p {
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  padding-left: 12px;
  padding-right: 12px;
  opacity: 60%;
  word-spacing: 1px;
}

.movie_detail {
  list-style-type: none;
  display: flex;
  gap: 10px;
  margin: 0;
  margin-left: -30px;
}
.detail_item {
  padding: 6px 12px;
  background-color: #222c4f;
  border-radius: 8px;
}
.wrapper_info {
  margin-top: 18px;
  display: flex;
}
.wrapper_info_rate{
  display: flex;
 
}
.info_rate_circle {
  width: 100px;
  height: 100px;
  position: relative;
  margin-top: -10px;
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
.wrapper_info_votes{
  margin-top: 13.5px;
  margin-left: 18px;
}
.imdb_votes{
  font-size: 16px;
  font-weight: 700;
  font-family: "Roboto";
  
}
.imdb_text{
  font-size: 14px;
  font-weight: 400;
  opacity: 60%;
  font-family: "Roboto";
}
.wrapper_info_about{
 
 margin-left: 50px;
  margin-top: 16px;
}
.info_about_movie{
  opacity: 50%;
  font-weight: 400;
  font-size: 13px;
}
.wrapper_movie_img{
  width: 406px;
  height: 637px;
  margin: 0 auto;
  margin-top: 18px;
}
.wrapper_favorite_btn{
  width: 406px;
  height: 41px;
  border-radius: 12px;
  padding: 12px 24px;
  background-color:#724CF9 ;
  font-size: 14px;
  position: relative;
  top: -60px;
  border: none;
  color: white;
}

@media screen and (min-width: 1440px) {
  .container {
    width: 100%;
    padding: 30px 0 500px;
  }
}
</style>
