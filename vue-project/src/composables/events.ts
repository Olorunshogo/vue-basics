
// Event.ts
import { onMounted, onUnmounted } from 'vue';


export function useEventListener(target: EventTarget, eventType: string, callback: (event: MouseEvent) => void) {
  // A composable can also hook into its owner component's lifecycle to setup and teardown side effects.
  // Attach the event listener when the component is mounted
  onMounted(() => {
    window.addEventListener(eventType, callback as EventListener);
  });

  // Remove the event listener when the component is unmounted
  onUnmounted(() => {
    window.addEventListener(eventType, callback as EventListener);
  })
}
