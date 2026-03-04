"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let EpisodesService = class EpisodesService {
    constructor() {
        this.episodes = [
            {
                id: 1,
                name: 'Harry Potter and the Philosopher’s Stone',
                featured: false,
                year: 2015,
            },
            {
                id: 2,
                name: 'Harry Potter and the Chamber of Secrets',
                featured: false,
                year: 2016,
            },
            {
                id: 3,
                name: 'Harry Potter and the Prisoner of Azkaban',
                featured: false,
                year: 2020,
            },
            {
                id: 4,
                name: 'Harry Potter and the Goblet of Fire',
                featured: false,
                year: 2022,
            },
            {
                id: 5,
                name: 'Harry Potter and the Order of the Phoenix',
                featured: false,
                year: 2021,
            },
            {
                id: 6,
                name: 'Harry Potter and the Half-Blood Prince',
                featured: false,
                year: 2023,
            },
            {
                id: 7,
                name: 'Harry Potter and the Deathly Hallows – Part 1',
                featured: true,
                year: 2024,
            },
            {
                id: 8,
                name: 'Harry Potter and the Deathly Hallows – Part 2',
                featured: true,
                year: 2025,
            },
        ];
    }
    findAll(sort = 'asc', limit) {
        const sortedEpisodes = [...this.episodes].sort((a, b) => sort === 'asc' ? a.year - b.year : b.year - a.year);
        return sortedEpisodes.slice(0, limit);
    }
    findOne(id) {
        return this.episodes.find((ep) => ep.id === id);
    }
    getFeatureEpisodes() {
        return this.episodes.filter((eps) => eps.featured);
    }
    addEpisode(episodeDto) {
        const newEpisode = Object.assign(Object.assign({}, episodeDto), { id: (0, crypto_1.randomInt)(10, 20) });
        this.episodes.push(newEpisode);
    }
    updateEpisode(updatedEpisodeDto, id) {
        const existingEpIndex = this.episodes.findIndex((ep) => ep.id === id);
        if (existingEpIndex === -1) {
            return 'Episode not Found.';
        }
        const existingEpisode = this.episodes.at(existingEpIndex);
        const updatedEpisode = Object.assign(Object.assign(Object.assign({}, existingEpisode), updatedEpisodeDto), { id: existingEpisode.id });
        this.episodes[existingEpIndex] = updatedEpisode;
    }
    deleteEpisode(id) {
        this.episodes = this.episodes.filter((eps) => eps.id !== id);
    }
};
EpisodesService = __decorate([
    (0, common_1.Injectable)()
], EpisodesService);
exports.EpisodesService = EpisodesService;
//# sourceMappingURL=episodes.service.js.map