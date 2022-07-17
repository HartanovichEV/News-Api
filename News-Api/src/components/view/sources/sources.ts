import './sources.css';
import { IForDataSource } from '../../../types/index';

class Sources {
  draw(data: Array<IForDataSource>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
      const sourceCloneQuerySelector = function (teg: string) {
        return sourceClone.querySelector(teg) as HTMLElement;
      };
      sourceCloneQuerySelector('.source__item-name').textContent = item.name;
      sourceCloneQuerySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;