import { store } from '../flux/store/store';
import { navigate } from '../flux/actions/appActions';
import { animeService } from '../services/anime-service';

class WatchComponent extends HTMLElement {
    private animeList: any[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        await this.fetchAnimeData();
        this.render();
    }

    async fetchAnimeData() {
        try {
            const response = await animeService.getTopAnime(30);
            this.animeList = response.data || [];
        } catch (error) {
            console.error('Error fetching anime data:', error);
            this.animeList = [];
        }
    }

    render() {
        this.shadowRoot!.innerHTML = `
            <link rel="stylesheet" href="./styles/Watch.css">
            <div class="watch-container">
                <h2 class="section-title">Top Anime</h2>
                
                <div class="anime-grid">
                    ${this.animeList.map(anime => `
                        <anime-card
                            data-id="${anime.mal_id}"
                            data-title="${anime.title}"
                            data-image="${anime.images?.jpg?.large_image_url}"
                            data-episodes="${anime.episodes || '?'}"
                            data-score="${anime.score || 'N/A'}"
                        ></anime-card>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

customElements.define('watch-component', WatchComponent);
export default WatchComponent;