/**
 * Checks if the provided value is `undefined`.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
export const isUndefined = (value: unknown): boolean => {
  return typeof value === 'undefined';
};
