/**
 * Joins an array of path segments into a single path string.
 *
 * @param paths - Array of path segments to be joined.
 * @param isCreatePath - Optional. If true, creates a relative path without a leading slash.
 * @returns The joined path string.
 */
export const joinPaths = (paths: string[], isCreatePath?: boolean): string => {
  let joinedPath = isCreatePath ? '' : '/';
  for (const path of paths) {
    joinedPath += `${path}/`;
  }

  return joinedPath.slice(0, -1);
};
