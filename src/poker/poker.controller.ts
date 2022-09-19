import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import {
  PokerJudgeRequestDto,
  PokerJudgeResponse,
} from './dto/poker-judge.dto';
import { PlayPokerRequestDto } from './dto/poker-play.dto';
import { Hand } from './poker.model';
import { PokerService } from './poker.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('poker')
@Controller({
  version: ['1'],
  path: 'poker',
})
export class PokerController {
  constructor(private readonly pokerService: PokerService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK })
  welcome() {
    return this.pokerService.welcome();
  }
  @Post('judge')
  @ApiResponse({ status: HttpStatus.CREATED, type: PokerJudgeResponse })
  @ApiNotFoundResponse()
  @ApiBody({ type: PokerJudgeRequestDto })
  async judgeRole(@Body() hand: PokerJudgeRequestDto): Promise<Hand> {
    const handInfo: Hand = {
      ...hand,
    };

    return await this.pokerService.judgeRole(handInfo);
  }

  @Post('play')
  @ApiResponse({ status: HttpStatus.CREATED, type: PokerJudgeResponse })
  @ApiBadRequestResponse({ description: 'bad request.' })
  @ApiBody({ type: PlayPokerRequestDto })
  async play(@Body() playPokerDto: PlayPokerRequestDto) {
    return await this.pokerService.play(playPokerDto);
  }
}
