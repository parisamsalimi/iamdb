<script setup>
import SearchInput from "@/components/SearchInput.vue";
</script>
<template>
  <div class="head">
    <div class="head_pointer">
      <img :src="imageUrl" alt="" />
    </div>
    <div class="head_text">
      <h1 class="head_title">Result</h1>
      <span class="head_detail">for “Search Query”</span>
    </div>
    <div></div>
  </div>

  <div class="wrapper">
    <SearchInput />
    <div class="movie_card">
      <div class="movie_card_img"></div>
      <div class="movie_card_text">
        <div class="movie_card_text_title">
          <div class="movie_card_text_title_detail">
            <h2>The Shawshank Redemption</h2>
            <img class="movie_card_text_title_favorite" src="" alt="" />
          </div>
          <span>Drama</span>
        </div>
        <div class="movie_card_detail">
          <span>1994</span>
          <div class="dot"></div>
          <span>United States</span>
          <div class="dot"></div>
          <span>9.3</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.head {
  border: solid 1px red;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head_text {
  border: solid 1px red;
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
  background-color: red;
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
  border: solid 1px yellow;
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.movie_card {
  border: solid 1px white;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}
.movie_card_img {
  width: 7.625rem;
  height: 7.625rem;
  border: solid 1px blue;
}
.movie_card_text {
  border: solid 1px blue;
  flex: 1;
}
.movie_card_text_title {
  border: solid 1px purple;
}

.movie_card_detail {
  border: solid 1px yellow;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.movie_card_detail_list {
  display: flex;
}
.movie_card_detail_item {
  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 1440px) {
  .head_text {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
