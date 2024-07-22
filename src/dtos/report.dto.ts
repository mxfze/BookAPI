import { IsNotEmpty } from "class-validator";


export class AddBookDto {
    @IsNotEmpty()
    book: string;
}

export class UpdateBookDto {
    @IsNotEmpty()
    book: string;
}

export class ReportResponse {
    id: string;
    book: string
}