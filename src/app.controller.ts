import {Controller, Get, Post, Put, Delete, Param, Body, HttpCode,ParseUUIDPipe} from "@nestjs/common"
import { data } from "src/data";
import { v4 as uuid } from "uuid"
import { AppService } from "./app.service";
import { AddBookDto, UpdateBookDto } from "./dtos/report.dto"


@Controller('books')
export class AppController {

  constructor(
      private readonly appService: AppService 
  ){}


  @Get()
  getAllBooks(){
    return this.appService.getAllBooks()
  }

  @Get(":id")
  getAllBooksById(@Param('id', ParseUUIDPipe) id: string)  
  {
    return this.appService.getAllBooksById(id);
  }

  @Post()
  createBook(@Body() {book}: AddBookDto)
  {
    return this.appService.createBook({book})
  } 

  @Put(":id")
  updateBook(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateBookDto)
  {
    return this.appService.updateBook(id, body)
  }

  @HttpCode(204)
  @Delete(":id")
  deleteBook(@Param('id', ParseUUIDPipe) id: string)
  {
    return this.appService.deleteBook(id)
  }
}