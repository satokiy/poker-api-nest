import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { PokerHandDto, PokerJudgeResponse } from './dto/poker-hand.dto';
import { PlayPokerDto } from './dto/play-poker.dto';
import { Hand } from './poker.model';
import { PokerService } from './poker.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @ApiResponse({ status: HttpStatus.BAD_REQUEST })
  async judgeRole(@Body() hand: PokerHandDto): Promise<Hand> {
    const handInfo: Hand = {
      ...hand,
    };

    return await this.pokerService.judgeRole(handInfo);
  }

  @Post('play')
  async play(@Body() playPokerDto: PlayPokerDto) {
    return await this.pokerService.play(playPokerDto);
  }
}
