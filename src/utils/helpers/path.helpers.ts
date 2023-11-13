export const joinPaths = (paths: string[], isCreatePath?: boolean): string => {
  let joinedPath = isCreatePath ? '' : '/';
  for (const path of paths) {
    joinedPath += `${path}/`;
  }
  return joinedPath;
};
