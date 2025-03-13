
// fetch.js
import { onUnmounted, ref } from 'vue';

export function useFetch(url: string) {

  const data = ref<any>(null);
  const error = ref<any>(null);
  const loading = ref<boolean>(false);

  let abortController = new AbortController();

  onUnmounted(() => {
    abortController.abort();
  });

  const fetchData = async () => {
    if (!url) return;

    loading.value = true;
    try {
      const response = await fetch(url, { signal: abortController.signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      data.value = json;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    };
  };

  fetchData()

  // fetch('')
  // .then((res) => res.json())
  // .then((json) => (data.value = json))
  // .catch((err) => (error.value = err))

  return { data, error, loading }

}
