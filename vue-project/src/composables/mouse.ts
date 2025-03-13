
// MouseTracker
import { ref } from 'vue';
import { useEventListener } from '../composables/events';

// By convention, composables function names start with "use"
export function useMouse() {
  // State encapsulates and managed by the composable
  const x = ref<number>(0);
  const y = ref<number>(0);

  // A composables can update its managed state over time.
  // A composable can also hook into its owner component's lifecycle to setup and teardown side effects.
  useEventListener(window, 'mousemove', (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // Expose managed state as a return value
  return { x, y };
}


