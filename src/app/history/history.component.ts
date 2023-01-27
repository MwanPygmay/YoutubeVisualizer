import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { SearchBarService } from '../search-bar.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  

  constructor (public historyService: HistoryService, public searchBarService: SearchBarService){
    
  }
  ngOnInit(): void {
    console.log("ok là ça marche");
    this.historyService.printHistory();
    //this.historyService.getFormerHistory();
  }
  
  

  
}

