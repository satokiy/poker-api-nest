import { Body, Controller, Get, Post } from '@nestjs/common';
import { Hand } from './poker.model';
import { PokerService } from './poker.service';

@Controller({
  version: ['1'],
  path: 'poker',
})
export class PokerController {
  constructor(private readonly pokerService: PokerService) {};

  @Get()
  welcome() {
    return this.pokerService.welcome();
  }
  @Post('judge')
  judge(@Body('cards') cards: string): string {
    return this.pokerService.judge(cards);
  }
}
