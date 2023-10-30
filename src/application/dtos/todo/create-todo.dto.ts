import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTodoDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description?: string;
}
