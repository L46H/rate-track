import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from './interface/cryptoData.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.zonda.exchange/rest/trading/ticker';

  constructor(private http: HttpClient) {}

  getMarketData(currencyPair: string): Observable<Ticker> {
    return this.http.get<Ticker>(`${this.apiUrl}/${currencyPair}`);
  }
}
