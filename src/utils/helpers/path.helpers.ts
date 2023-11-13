export const joinPaths = (paths: string[]): string => {
  let joinedPath = '/';
  for (const path of paths) {
    joinedPath += `${path}/`;
  }
  return joinedPath;
};
