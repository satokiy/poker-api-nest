import { ApiProperty } from '@nestjs/swagger';

export class PlayPokerRequestDto {
  @ApiProperty({
    type: [String],
    description: '手札のリスト',
    example: ['H1 H2 H3 H4 H5', 'D1 D2 D3 D4 D5', 'D1 D2 D3 D4 D5'],
  })
  handList: string[];
}
