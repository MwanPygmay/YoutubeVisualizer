import { Injectable } from '@angular/core';
import {
  HISTORY_QUERY,
  ADD_URL_TO_HISTORY,
  TEST_QUERY,
} from './graphql.queries';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  history: any[] = [];
  error: any;

  constructor(private apollo: Apollo) {
    console.log('built');
  }

  getFormerHistory(): void {
    console.log("on va chercher l'ancien historique");
    this.apollo
      .watchQuery({ query: HISTORY_QUERY })
      .valueChanges.subscribe(({ data }: any) => {
        this.history = data.history;
      });
  }

  printHistory(): void {
    this.apollo
      .query({ query: TEST_QUERY })
      .subscribe(({ res, error }: any) => {
        console.log(res);
        this.error = error;
      });
    this.apollo
      .watchQuery({
        query: TEST_QUERY,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        console.log(data);
        this.error = error;
      });
  }

  addUrlToHistory(newUrl: string) {
    this.apollo
      .mutate({
        mutation: ADD_URL_TO_HISTORY,
        variables: { youtubeUrl: newUrl },
        refetchQueries: [{ query: HISTORY_QUERY }],
      })
      .subscribe(({ data }: any) => (this.history = data.addUrlToHistory));
  }

  getHistory() {
    return this.history;
  }
}
