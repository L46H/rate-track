import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../crypto.service';
import { Observable } from 'rxjs';
import { Ticker } from '../../interface/cryptoData.interface';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {
  cryptoData$!: Observable<Ticker>;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.fetchMarketData();
  }

  fetchMarketData(): void {
    this.cryptoData$ = this.cryptoService.getMarketData('BTC-USD');
  }
}
