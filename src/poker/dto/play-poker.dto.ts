import { ApiProperty } from "@nestjs/swagger";

export class PlayPokerDto {
  @ApiProperty({
    description: '手札のリスト',
  })
  handList: string[];
}
