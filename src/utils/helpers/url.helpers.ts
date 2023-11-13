import { isUndefined } from './common.helpers';

/**
 * Converts an array of numbers or strings to URL query parameters.
 *
 * @param key - The parameter key.
 * @param array - Array of numbers or strings to be converted.
 * @returns URL query parameters string.
 */
export const arrayToParams = (key: string, array: Array<number | string>): string => {
  const params = array.map((value) => `${key}[]=${value}`);
  return params.join('&');
};

/**
 * Injects parameters into a URL query string.
 *
 * @param url - The base URL.
 * @param object - An object containing key-value pairs to be injected as parameters.
 * @returns The modified URL with injected parameters.
 */
export function injectParams(url: string, object: Record<string, unknown>): string {
  let result = `${url}?`;

  // Get all keys from object
  const keys = Object.keys(object);

  // Iterate over keys
  keys.forEach((key, index) => {
    const value = object[key];

    if (Array.isArray(value)) {
      result += arrayToParams(key, value);
    } else if (!isUndefined(value)) {
      // Adding key=value to result
      result += `${key}=${value}`;

      // Adding & if it's not the last param
      if (index < keys.length - 1) {
        result += '&';
      }
    }
  });

  // Remove the last "&"" from string
  if (result.endsWith('&')) {
    result = result.slice(0, -1);
  }

  return result;
}
