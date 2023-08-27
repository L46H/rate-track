import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { BitcoinComponent } from './cryptocurrencies/bitcoin/bitcoin.component';
import { CurrenciesComponent } from './cryptocurrencies/currencies/currencies.component';


@NgModule({
  declarations: [
    BitcoinComponent,
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule
  ]
})
export class CryptoModule { }
