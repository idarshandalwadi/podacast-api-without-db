/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { CreateEpisodeDto } from 'src/dto/EpisodeDto';
import { Episode } from 'src/entity/Episode';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [
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

  // Accepts sort but only two acceptable values = 'asc' & 'desc'
  findAll(sort: 'asc' | 'desc' = 'asc', limit: number) {
    
    // Copied existing array, so it should not alter the main source
    // Sorted them and return with applying a limit
    const sortedEpisodes = [...this.episodes].sort((a, b) =>
      sort === 'asc' ? a.year - b.year : b.year - a.year,
    );

    return sortedEpisodes.slice(0, limit);
  }

  findOne(id: number) {
    return this.episodes.find((ep) => ep.id === id);
  }

  getFeatureEpisodes() {
    return this.episodes.filter((eps) => eps.featured);
  }

  addEpisode(episodeDto: CreateEpisodeDto) {
    const newEpisode = { ...episodeDto, id: randomInt(10, 20) };
    this.episodes.push(newEpisode);
  }

  updateEpisode(updatedEpisodeDto: CreateEpisodeDto, id: number) {
    const existingEpIndex = this.episodes.findIndex((ep) => ep.id === id);

    if (existingEpIndex === -1) {
      return 'Episode not Found.';
    }

    // Fetch episode using the index
    const existingEpisode = this.episodes.at(existingEpIndex);

    // Updated episode with the incoming DTO
    const updatedEpisode: Episode = {
      ...existingEpisode,
      ...updatedEpisodeDto,
      id: existingEpisode.id, // Preseving the same old ID
    };

    // Replace existing episode at index with new updated Episode.
    this.episodes[existingEpIndex] = updatedEpisode;
  }

  deleteEpisode(id: number) {
    this.episodes = this.episodes.filter((eps) => eps.id !== id);
  }
}
