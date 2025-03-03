<script setup>
console.log("jladkfjadf");
</script>

<template>
  <div class="container background_img">
    <div class="wrapper">
      <div class="content">
        <div class="image_wrap">
          <div class="skeleton-box poster"></div>
          <div class="rate_wrapper">
            <div class="rate">
              <div class="rate_circle">
                <div class="skeleton-box circle"></div>
              </div>
              <div class="votes_wrap">
                <div class="skeleton-box text small"></div>
                <div class="skeleton-box text tiny"></div>
              </div>
            </div>
            <div class="rate_description">
              <div class="skeleton-box text medium"></div>
            </div>
          </div>
        </div>
        <div class="detail_wrap">
          <div class="title_wrap">
            <div class="skeleton-box title text large"></div>
            <div class="skeleton-box title text medium"></div>
            <div class="skeleton-box title text medium"></div>
            <div class="skeleton-box title text medium"></div>
            <div class="skeleton-box title text medium"></div>
          </div>
        </div>
      </div>
      <div class="skeleton-box button_wrap"></div>
    </div>
  </div>
</template>
<style scoped>
.skeleton-box {
  background: linear-gradient(
    to right,
    var(--l-navy) 25%,
    var(--ll-navy) 50%,
    var(--l-navy) 75%
  );
  background-size: 400% 100%;
  animation: skeleton-loading 1.5s infinite ease-in-out;
  border-radius: 6px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.container {
  width: 100%;
  margin: 0 auto;
}
.wrapper {
  max-width: 920px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.image_wrap {
  width: 210px;
  display: flex;
  flex-direction: column;
}
.detail_wrap {
  display: flex;
  flex: 1;
}

.title_wrap {
  width: 100%;
}
.title_wrap > .large {
  height: 50px;
  margin-bottom: 60px;
}
.title_wrap > .medium {
  height: 20px;
  margin-bottom: 15px;
  width: 70%;
}
.content {
  display: flex;
  flex-direction: row;
  gap: 70px;
  margin-top: 150px;
}
.votes_wrap {
  width: 100%;
}

.votes_wrap > .tiny {
  height: 10px;
}

.votes_wrap > .small {
  height: 30px;
  margin-bottom: 10px;
}
.poster {
  width: 210px;
  height: 300px;
  border-radius: 18px;
}
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}

.rate_wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.rate {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
