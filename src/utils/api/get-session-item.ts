export const getSessionItem = (storageId: string) =>
  JSON.parse(sessionStorage.getItem(storageId) as string);
