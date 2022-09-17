import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokerHandDto } from './dto/poker-hand.dto';
import { PlayPokerDto } from './dto/play-poker.dto';
import { Hand } from './poker.model';
import { PokerService } from './poker.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('poker')
@Controller({
  version: ['1'],
  path: 'poker',
})
export class PokerController {
  constructor(private readonly pokerService: PokerService) {}

  @Get()
  welcome() {
    return this.pokerService.welcome();
  }
  @Post('judge')
  async judge(@Body() hand: PokerHandDto): Promise<Hand> {
    const handInfo: Hand = {
      ...hand,
    };

    return await this.pokerService.judge(handInfo);
  }

  @Post('play')
  async play(@Body() playPokerDto: PlayPokerDto) {
    for (const hand of playPokerDto.handList) {
      const handInfo: Hand = {
        hand,
      };
      console.log(handInfo);
    }
    return 'Wow';
  }
}
