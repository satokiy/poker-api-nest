import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller({
  version: ['1'],
  path: 'poker',
})
export class PokerController {
  @Get()
  findAll() {
    return 'this is poker app';
  }


}
