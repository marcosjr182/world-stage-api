import { Body, Controller, Get, Post } from '@nestjs/common';

import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { Video } from './schemas/video.schema';

@Controller('videos')
export class VideosController {
  constructor(private readonly service: VideosService) {}

  @Post()
  async create(@Body() video: CreateVideoDto) {
    await this.service.create(video);
  }

  @Get()
  async findAll(): Promise<Video[]> {
    return this.service.findAll();
  }
}