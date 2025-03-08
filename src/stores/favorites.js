import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);

  const saveFavorites = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  const isFavorite = (id) => {
    return favorites.value.some((movie) => movie.id === id);
  };

  const toggleFavorite = (movie) => {
    const index = favorites.value.findIndex((fav) => fav.id === movie.id);
    if (index === -1) {
      favorites.value.push(movie);
    } else {
      favorites.value.splice(index, 1);
    }
    saveFavorites();
  };

  return { favorites, isFavorite, toggleFavorite };
});


// export const useFavoritesStore = defineStore('favorites', {
//   state: () => ({
//     favorites: JSON.parse(localStorage.getItem('favorites')) || []
//   }),

//   actions: {
//     toggleFavorite(movie) {
//       const index = this.favorites.findIndex(fav => fav.id === movie.id);
//       if (index !== -1) {
//         this.favorites.splice(index, 1); // Remove if already favorited
//       } else {
//         this.favorites.push(movie); // Add to favorites
//       }
//       localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Save to localStorage
//     },

//     isFavorite(movieId) {
//       return this.favorites.some(fav => fav.id === movieId);
//     }
//   }
// });
