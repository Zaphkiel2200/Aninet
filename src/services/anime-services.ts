export class AnimeService {
    private baseUrl = 'https://api.jikan.moe/v4';

    async getTopAnime(limit = 30) {
        try {
            const response = await fetch(`${this.baseUrl}/top/anime?limit=${limit}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching top anime:', error);
            return { data: [] };
        }
    }
}

export const animeService = new AnimeService();