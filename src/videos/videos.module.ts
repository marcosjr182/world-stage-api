import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { Video, VideoSchema } from './schemas/video.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
