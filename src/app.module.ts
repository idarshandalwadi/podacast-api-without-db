import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodsModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [EpisodsModule, TopicsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
// It is a starting point of the application, adn default module of the application.
export class AppModule {}
