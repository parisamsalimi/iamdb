import { ref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(url.value || url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.error("Fetch error:", err);
    } finally {
      loading.value = false;
    }
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, loading, e