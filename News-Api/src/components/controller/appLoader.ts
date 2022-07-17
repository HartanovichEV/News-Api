import Loader from './loader';

class AppLoader extends Loader {
  public constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '8600bfadab1c408da4e02ba71f898190', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
