import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CryptoListComponent],
  imports: [CommonModule, CryptoRoutingModule, MatProgressSpinnerModule]
})
export class CryptoModule {}
