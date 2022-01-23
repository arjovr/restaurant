import MyImage from './assets/imgs/background.jpg';
import './style.css';
import * as homePage from './home';
import * as bar from './navigationbar';


const content = document.querySelector('#content');

content.style.backgroundImage = `url('${MyImage}')`;
content.style.height = '100vh';

const tabContent = bar.render();

// mostramos home por default
homePage.render(tabContent);

