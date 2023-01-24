import { Injectable } from '@angular/core';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  url = '';
  constructor(private historyService: HistoryService) { }

  changeURL(newURL: string) {
    this.url = newURL;
    this.historyService.add(newURL);
  }

  getURL(){return this.url;}
}
