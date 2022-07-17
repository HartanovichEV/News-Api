import './news.css';
import { IForDataNew } from '../../../types/index';

class News {
  draw(data: Array<IForDataNew>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      const newsCloneQuerySelector = function (teg: string) {
        return newsClone.querySelector(teg) as HTMLElement;
      };
      
      if (idx % 2) newsCloneQuerySelector('.news__item').classList.add('alt');

      newsCloneQuerySelector('.news__meta-photo').style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      newsCloneQuerySelector('.news__meta-author').textContent = item.author || item.source.name;
      newsCloneQuerySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsCloneQuerySelector('.news__description-title').textContent = item.title;
      newsCloneQuerySelector('.news__description-source').textContent = item.source.name;
      newsCloneQuerySelector('.news__description-content').textContent = item.description;
      newsCloneQuerySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLElement).innerHTML = '';
    (document.querySelector('.news') as HTMLElement).appendChild(fragment);
  }
}

export default News;
