/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Episode } from 'src/entity/Episode';

@Injectable()
export class ConfigService {

    allEpisodes: readonly Episode[] = [];

    getEpisodes(): readonly Episode[] {
        return this.allEpisodes;
    }

    populateEpisodes() {
        this.allEpisodes = [
            {
                id: 1,
                name: 'Harry Potter and the Philosopher’s Stone',
                featured: false,
                year: 2015
            },
            {
                id: 2,
                name: 'Harry Potter and the Chamber of Secrets',
                featured: false,
                year: 2016
            },
            {
                id: 3,
                name: 'Harry Potter and the Prisoner of Azkaban',
                featured: false,
                year: 2020
            },
            {
                id: 4,
                name: 'Harry Potter and the Goblet of Fire',
                featured: false,
                year: 2022
            },
            {
                id: 5,
                name: 'Harry Potter and the Order of the Phoenix',
                featured: false,
                year: 2021
            },
            {
                id: 6,
                name: 'Harry Potter and the Half-Blood Prince',
                featured: false,
                year: 2023
            },
            {
                id: 7,
                name: 'Harry Potter and the Deathly Hallows – Part 1',
                featured: true,
                year: 2024
            },
            {
                id: 8,
                name: 'Harry Potter and the Deathly Hallows – Part 2',
                featured: true,
                year: 2025
            }
        ];
    }
}
