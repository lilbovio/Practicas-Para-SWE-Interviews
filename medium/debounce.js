/**
 * Delay calling fn until waitMs has passed without another call.
 * Each new call restarts the timer and replaces the arguments, so fn runs once
 * with the latest arguments. `debounced.cancel()` drops a pending call.
 * Time: O(1) per call.
 * @template {(...args: any[]) => any} F
 * @param {F} fn
 * @param {number} waitMs
 * @returns {((...args: Parameters<F>) => void) & { cancel: () => void }}
 */
export function debounce(fn, waitMs) {
  let timer = null;

  function debounced(...args) {
    const context = this;
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(context, args);
    }, waitMs);
  }

  debounced.cancel = () => {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced;
}
