import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from './interface/cryptoData.interface';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.zonda.exchange/rest/trading/ticker';

  constructor(private http: HttpClient) {}

  getMarketData(currencyPair: string): Observable<Rate> {
    return this.http.get<Rate>(`${this.apiUrl}/${currencyPair}`);
  }
}
