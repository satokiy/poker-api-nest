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
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DrawCardRequestDto } from './dto/draw.dto';

@ApiTags('poker')
@Controller({
  path: 'poker',
})
export class PokerController {
  constructor(private readonly pokerService: PokerService) {}

  @Get()
  @ApiOperation({ description: 'welcome response.' })
  @ApiResponse({ status: HttpStatus.OK })
  welcome() {
    return this.pokerService.welcome();
  }

  @Get('draw')
  @ApiOperation({ description: 'Get a random 5 cards for poker' })
  @ApiResponse({ status: HttpStatus.OK, type: DrawCardRequestDto })
  draw() {
    return this.pokerService.draw();
  }

  @Post('judge')
  @ApiOperation({ description: 'Post cards and return result of poker role.' })
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
  @ApiOperation({
    summary: 'Post multiple hand and return winner(coming soon!).',
  })
  @ApiResponse({ status: HttpStatus.CREATED, type: PokerJudgeResponse })
  @ApiBadRequestResponse({ description: 'bad request.' })
  @ApiBody({ type: PlayPokerRequestDto })
  async play(@Body() playPokerDto: PlayPokerRequestDto) {
    return await this.pokerService.play(playPokerDto);
  }
}
