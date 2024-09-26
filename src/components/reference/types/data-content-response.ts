export type DataContentResponse = {
  title: string;
  content?: string | string[] | {}[] | DataContentResponse[];
  description?: string;
  href?: string;
  tags?: string[];
};
