export const useElementWidth = (element: string) => {
  const widthEl = document.getElementById(element) as HTMLElement | null;
  const width = widthEl?.clientWidth;

  return width;
};
