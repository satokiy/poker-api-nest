import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { Hand } from './poker.model';
import { HandCheckService } from 'libs/poker/src/hand-check';
import { JudgePokerRoleService } from 'libs/poker/src/poker';
import { PlayPokerRequestDto } from './dto/poker-play.dto';

@Injectable()
export class PokerService {
  constructor(
    private readonly handCheckService: HandCheckService,
    private readonly judgeRoleService: JudgePokerRoleService,
  ) {}

  welcome() {
    return {
      statusCode: HttpStatus.OK,
      body: 'Hello! This is Poker App!',
    };
  }

  async judgeRole(handInfo: Hand) {
    console.log(handInfo);
    const errorMessage = this.handCheckService.isInvalidMessage(handInfo);

    if (errorMessage.length > 0) {
      throw new BadRequestException(errorMessage);
    }

    handInfo.cardList = handInfo.hand.split(' ');
    return await this.judgeRoleService.judgeRole(handInfo);
  }

  async play(playPokerRequestDto: PlayPokerRequestDto) {
    console.log(playPokerRequestDto);
    return 'wow';
  }
}
