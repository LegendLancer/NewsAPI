export interface articleSource {
  id: string;
  name: string;
}

export interface articleItem {
  source: articleSource;
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface articleData {
  data: Array<articleItem>;
  current: articleItem;
  keyword: string;
}
