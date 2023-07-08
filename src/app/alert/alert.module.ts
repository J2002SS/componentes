import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [AlertPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertPageRoutingModule,
        ComponentsModule
    ]
})
export class AlertPageModule {}
