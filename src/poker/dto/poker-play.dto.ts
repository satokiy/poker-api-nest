import { ApiProperty } from '@nestjs/swagger';

export class PlayPokerRequestDto {
  @ApiProperty({
    type: [String],
    description: '手札のリスト',
    example: ['♠1 ♠2 ♠3 ♠4 ♠5', '♥1 ♥2 ♥3 ♥4 ♥5', '♣1 ♣2 ♣3 ♣4 ♣5'],
  })
  handList: string[];
}
