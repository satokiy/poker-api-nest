import { BadRequestException, Injectable } from '@nestjs/common';
import { Hand } from './poker.model';
import { HandCheckService } from 'libs/poker/src/hand-check';
import { JudgePokerRoleService } from 'libs/poker/src/poker';
import { PlayPokerDto } from './dto/play-poker.dto';

@Injectable()
export class PokerService {
  welcome() {
    return 'this is poker service. welcome!';
  }

  async judgeRole(handInfo: Hand) {
    console.log(handInfo);
    const service = new HandCheckService(handInfo);
    const errorMessage = service.isInvalidMessage();

    if (errorMessage.length > 0) {
      throw new BadRequestException(errorMessage);
    }

    handInfo.cardList = handInfo.hand.split(' ');
    const judgeService = new JudgePokerRoleService();
    return await judgeService.judgeRole(handInfo);
  }
  async play(playPokerDto: PlayPokerDto) {
    console.log(playPokerDto);
    return 'wow';
  }
}
