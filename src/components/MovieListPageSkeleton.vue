<template>
  <div class="loading-skeleton">
    <div class="skeleton-card" v-for="i in 5" :key="i">
      <div class="skeleton-img"></div>
      <div class="skeleton-text">
        <div class="skeleton-title"></div>
        <div class="skeleton-subtitle"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-skeleton {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px;
}

.skeleton-card {
  display: flex;
  gap: 30px;
  background-color: var(
    --l-dark-grey
  ); 
  padding: 15px;
  border-radius: 8px;
  animation: skeleton-loading 2s infinite ease-in-out;
}

.skeleton-img {
  width: 120px;
  height: 120px;
  background-color: var(
    --l-navy
  ); 
  border-radius: 8px;
  animation: skeleton-loading 2s infinite ease-in-out;
}

.skeleton-text {
  flex: 1;
}

.skeleton-title,
.skeleton-subtitle {
  height: 18px;
  background-color: var(--l-navy); 
  margin-bottom: 10px;
  border-radius: 4px;
  animation: skeleton-loading 2s infinite ease-in-out;
}

.skeleton-title {
  width: 70%;
}

.skeleton-subtitle {
  width: 40%;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--l-navy);
  }
  50% {
    background-color: var(
      --l-dark-grey
    ); 
  }
  100% {
    background-color: var(--l-navy);
  }
}
</style>
