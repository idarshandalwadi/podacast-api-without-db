import { Episode } from 'src/entity/Episode';
export declare class ConfigService {
    allEpisodes: readonly Episode[];
    getEpisodes(): readonly Episode[];
    populateEpisodes(): void;
}
