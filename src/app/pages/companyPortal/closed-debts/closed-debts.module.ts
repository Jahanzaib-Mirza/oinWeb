import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosedDebtsPageRoutingModule } from './closed-debts-routing.module';

import { ClosedDebtsPage } from './closed-debts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosedDebtsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClosedDebtsPage]
})
export class ClosedDebtsPageModule {}
