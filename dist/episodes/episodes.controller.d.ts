import { EpisodesService } from './episodes.service';
export declare class EpisodesController {
    private episodeService;
    constructor(episodeService: EpisodesService);
    findAll(sort: 'asc' | 'desc', limit: number): import("../entity/Episode").Episode[];
    findOne(id: number): import("../entity/Episode").Episode;
    getFeatureEpisodes(): import("../entity/Episode").Episode[];
    addEpisode(inputObj: any): void;
    updateEpisode(id: number, updateMe: any): string;
    deleteEpisode(id: number): void;
}
