import { store } from '../flux/store/store';
import { navigate } from '../flux/actions/appActions';

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupNavigation();
    }

    render() {
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: block;
                    min-height: 100vh;
                    background-color: #111;
                    color: white;
                    font-family: 'Roboto', sans-serif;
                }
                
                header-component {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                }
                
                main {
                    padding: 100px 20px 60px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                footer-component {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            </style>
            
            <header-component></header-component>
            <main id="content"></main>
            <footer-component></footer-component>
        `;
    }

    setupNavigation() {
        const content = this.shadowRoot!.getElementById('content');
        
        store.subscribe(() => {
            const state = store.getState();
            this.updateContent(state.currentPage, content!);
        });

        // Manejar navegación inicial
        const initialPage = window.location.pathname.replace('/', '') || 'home';
        store.dispatch(navigate(initialPage));
    }

    updateContent(page: string, container: HTMLElement) {
        switch (page) {
            case 'home':
                container.innerHTML = `
                    <post-creator></post-creator>
                    <post-list></post-list>
                `;
                break;
            case 'watch':
                container.innerHTML = '<watch-component></watch-component>';
                break;
            default:
                container.innerHTML = '<h2>Page not found</h2>';
        }
    }
}

customElements.define('app-root', App);
export default App;