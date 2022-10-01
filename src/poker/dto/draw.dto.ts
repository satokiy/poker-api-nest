import { ApiProperty } from '@nestjs/swagger';

export class DrawCardRequestDto {
  @ApiProperty({
    type: [String],
    description: '手札',
    example: ['H1', 'D2', 'D3', 'S4', 'C5'],
  })
  hand: string[];
}
