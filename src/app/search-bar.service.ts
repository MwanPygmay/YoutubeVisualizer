import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  url = new BehaviorSubject('');
  constructor(private historyService: HistoryService) { }

  changeURL(newURL: string) {
    this.url.next(newURL);
    this.historyService.addUrlToHistory(newURL);
  }

  getURL(){return this.url;}
}
