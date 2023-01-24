import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  
  constructor() { }

  history: string[] = [];

  add(message: string) {
    this.history.push(message);
    localStorage.setItem("history",JSON.stringify(this.history));
  }
}
