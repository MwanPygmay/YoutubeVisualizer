import { Component } from '@angular/core';
import { HistoryService } from '../history.service';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  constructor (public historyService: HistoryService, public searchBarService: SearchBarService){
    let formerHistory = JSON.parse(localStorage.getItem('bookmarks') || '');
    for (let i = 0; i < formerHistory.length; i++) {
      this.historyService.add(formerHistory[i]);
      
    }
  }
}

