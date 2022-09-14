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
  async judge(@Body('cards') cards: string): Promise<Hand> {
    const hand: Hand = {
      cards: cards,
    };
    hand.cardList = hand.cards.split(' ');
    console.log(hand);

    return await this.pokerService.judge(hand);
  }
}
