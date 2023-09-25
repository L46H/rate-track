import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { Observable, tap } from 'rxjs';
import { Ticker } from '../interface/cryptoData.interface';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
  providers: [CryptoService]
})
export class CryptoListComponent implements OnInit {
  cryptoSymbols: string[] = [
    'BTC-USD',
    'ETH-USD',
    'LTC-USD',
    'USDT-USD',
    'XRP-USD'
  ];
  cryptoData$: { [symbol: string]: Observable<Ticker> } = {};
  error: Error | null = null;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.fetchMarketData();
  }

  fetchMarketData(): void {
    this.cryptoSymbols.forEach(symbol => {
      this.cryptoData$[symbol] = this.cryptoService.getMarketData(symbol).pipe(
        tap({
          error: error => {
            this.error = error.message;
          }
        })
      );
    });
  }

  calculatePercentageChange(rate: string, previousRate: string): number {
    const rateValue = parseFloat(rate);
    const previousRateValue = parseFloat(previousRate);

    return ((rateValue - previousRateValue) / previousRateValue) * 100;
  }

  calculateAverageRate(rate: string, previousRate: string): number {
    const rateValue = parseFloat(rate);
    const previousRateValue = parseFloat(previousRate);

    return (rateValue + previousRateValue) / 2;
  }
}
