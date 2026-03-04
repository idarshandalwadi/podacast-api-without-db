import { CreateEpisodeDto } from 'src/dto/EpisodeDto';
import { Episode } from 'src/entity/Episode';
export declare class EpisodesService {
    private episodes;
    findAll(sort: 'asc' | 'desc', limit: number): Episode[];
    findOne(id: number): Episode;
    getFeatureEpisodes(): Episode[];
    addEpisode(episodeDto: CreateEpisodeDto): void;
    updateEpisode(updatedEpisodeDto: CreateEpisodeDto, id: number): string;
    deleteEpisode(id: number): void;
}
