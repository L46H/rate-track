import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

@NgModule({
  declarations: [CryptoListComponent],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class CryptoModule {}
