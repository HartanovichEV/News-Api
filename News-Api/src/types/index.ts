export interface IForDataNew { 
  source: Pick<IForDataSource, 'id' | 'name'>;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;  
}

export interface IForDataSource { 
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;  
}

export type DataForArticles = { 
  status: string; 
  totalResults: number;
  articles: Array<Readonly<IForDataNew>>;
};

export type DataForSources = { 
  status: string; 
  sources: Array<Readonly<IForDataSource>>;
};

export enum APIendpoint {
  sources = 'sources',
  everything = 'everything',
}