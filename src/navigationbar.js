import * as homePage from './home';
import * as menuPage from './menu';
import * as contactPage from './contact';

function render() {
    const content = document.querySelector('#content');
    content.innerHTML = `
        <nav class="navigation-bar">
            <div class="nav-item home-nav nav-selected" data-tab="home">Home</div>
            <div class="nav-item menu-nav" data-tab="menu">Menu</div>
            <div class="nav-item contact-nav" data-tab="contact">Contact</div>
        </nav>
        <div class="tab-content"></div>
    `;

    const bar = document.querySelector('.navigation-bar');
    const items = bar.querySelectorAll('.nav-item');
    const tabContent = content.querySelector('.tab-content');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            items.forEach((it) => {
                it.classList.remove('nav-selected');
            });
            tabContent.innerHTML = '';
            switch (item.dataset.tab) {
                case 'home':
                    homePage.render(tabContent);
                    break;
                case 'menu':
                    menuPage.render(tabContent);
                    break;
                case 'contact':
                    contactPage.render(tabContent);
                    break;
            }
            item.classList.add('nav-selected');
        });
    });

    return tabContent;
}

export { render };
