import { Injectable } from '@angular/core';
import { SearchBarService } from './search-bar.service';

@Injectable({
  providedIn: 'root'
})
export class BookMarkService {

  constructor(private searchBarService: SearchBarService) { }

  getURL(){return this.searchBarService.getURL()}
}
