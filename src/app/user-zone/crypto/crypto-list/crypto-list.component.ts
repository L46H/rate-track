import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { Observable, forkJoin } from 'rxjs';
import { Ticker } from '../interface/cryptoData.interface';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  btcData$!: Observable<Ticker>;
  ethData$!: Observable<Ticker>;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.fetchMarketData();
  }

  fetchMarketData(): void {
    // Fetch data for BTC-USD and ETH-USD separately
    this.btcData$ = this.cryptoService.getMarketData('BTC-USD');
    this.ethData$ = this.cryptoService.getMarketData('ETH-USD');
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
