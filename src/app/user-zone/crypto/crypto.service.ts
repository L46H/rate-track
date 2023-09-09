import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from './interface/cryptoData.interface';
import { Observable, interval, startWith, switchMap } from 'rxjs';

@Injectable()
export class CryptoService {
  private apiUrl = 'https://api.zonda.exchange/rest/trading/ticker';
  private updateInterval = 15000;

  constructor(private http: HttpClient) {}

  getMarketData(currencyPair: string): Observable<Ticker> {
    return interval(this.updateInterval).pipe(
      startWith(0),
      switchMap(() => this.http.get<Ticker>(`${this.apiUrl}/${currencyPair}`))
    );
  }
}
