import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentSchema } from '@workspace/zod-schemas';
import { createZodDto } from 'nestjs-zod';
import { Public } from '../auth/public.decorator';
import { plainToInstance } from 'class-transformer';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Req() req: any) {
    console.log('DEBUG:', req.user);
    return this.commentsService.create(createCommentDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }

  @Get('test')
  test() {
    return createZodDto(CommentSchema);
  }
}
