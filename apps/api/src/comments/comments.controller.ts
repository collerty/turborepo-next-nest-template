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
import { ReqWithUser } from '../auth/req-with-user';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {
  }

  // @Public()
  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Req() req: ReqWithUser) {
    console.log(CreateCommentDto)
    console.log("creating comment")
    return this.commentsService.create(createCommentDto, req.user.id);
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
