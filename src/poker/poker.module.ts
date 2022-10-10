import { Module } from '@nestjs/common';
import { Deck } from 'libs/poker/src/deck';
import { HandCheckService } from 'libs/poker/src/hand-check';
import { JudgePokerRoleService } from 'libs/poker/src/poker';
import { PokerController } from './poker.controller';
import { PokerService } from './poker.service';

@Module({
  controllers: [PokerController],
  providers: [PokerService, HandCheckService, JudgePokerRoleService, Deck],
})
export class PokerModule {}
