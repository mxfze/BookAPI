import { Injectable } from "@nestjs/common";
import { data } from "src/data";
import { v4 as uuid } from "uuid"


interface Data  {book: string}

export class AppService {
  getAllBooks(){
    return data.report;
  }

  getAllBooksById(id: string){
    return data.report.find(report => report.id === id)
  }

  createBook({book}: Data){
    const newReport = {
      id: uuid(),
      book
    }
    data.report.push(newReport)
    return `Created new book with id ${newReport.id} called ${book}.`
    return newReport;
  }

  updateBook(id: string, {book}: Data){
    const reportToUpdate = data.report.find(report => report.id === id)
    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);
    
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...{book},

    }

    return data.report[reportIndex]
  }

  deleteBook(id: string){
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1)

    return "Deleted"

  }
}