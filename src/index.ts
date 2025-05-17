import App from './root/App';
import './components/Header/Header';
import './components/Footer/Footer';
import './components/PostCreator/PostCreator';
import './components/PostList/PostList';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.initialize();
});