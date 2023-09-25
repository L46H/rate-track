import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ticker } from './interface/cryptoData.interface';
import {
  Observable,
  catchError,
  delay,
  interval,
  startWith,
  switchMap,
  throwError
} from 'rxjs';

@Injectable()
export class CryptoService {
  private apiUrl = 'https://api.zonda.exchange/rest/trading/ticker';
  private updateInterval = 15000;

  constructor(private http: HttpClient) {}

  getMarketData(currencyPair: string): Observable<Ticker> {
    return interval(this.updateInterval).pipe(
      startWith(0),
      delay(1500),
      switchMap(() => this.http.get<Ticker>(`${this.apiUrl}/${currencyPair}`)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage =
      error.status === 404
        ? '404 status: error occurred while fetching data from server'
        : 'unknown error occurred no data available';
    return throwError(() => new Error(errorMessage));
  }
}
