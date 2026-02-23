/* eslint-disable prettier/prettier */
import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { log } from 'console';
import { EpisodesService } from './episodes.service';
import { CheckPositiveNumberPipe } from 'src/pipes/check-positive-number.pipe';

@Controller('episodes')
export class EpisodesController {
    
    constructor(private episodeService: EpisodesService) { }

    @Get()
    findAll(
        @Query('sort') sort: 'asc' | 'desc' = 'desc',
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe, CheckPositiveNumberPipe) limit: number
    ) {
        log(`Result count limit is set to: ${limit}`);
        return this.episodeService.findAll(sort, limit);
    }

    @Get('id/:id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        log(id);
        const episode = this.episodeService.findOne(id);
        if(episode) {
            return episode;
        } else {
            throw new HttpException('Record Not Found', HttpStatus.NOT_FOUND);
        }
    }

    @Get('featured')
    getFeatureEpisodes() {
        const featuredEpisodes = this.episodeService.getFeatureEpisodes();
        if(featuredEpisodes) {
            return featuredEpisodes;
        } else {
            throw new NotFoundException('Records are not found');
        }
    }

    @Post()
    // Use @Body to take object as input
    addEpisode(@Body() inputObj: any) {
        console.log(inputObj);
        return this.episodeService.addEpisode(inputObj); 
    }

    @Put('id/:id')
    updateEpisode(@Param('id' , ParseIntPipe) id: number, @Body() updateMe: any) {
        log(`New Value for the object: ${JSON.stringify(updateMe)}`);
        return this.episodeService.updateEpisode(updateMe, id);
    }

    @Delete('id/:id')
    deleteEpisode(@Param('id', ParseIntPipe) id: number) {
        log(`Deleted this ID: ${id}`);
        return this.episodeService.deleteEpisode(id);
    }

}
