import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @IsNumber()
    @Min(1)
    @Max(6)
    @Type(() => Number) // Converts string inputs from multipart/form-data into numbers
    credits: number;

    @IsString()
    @IsOptional()
    description?: string;
}
