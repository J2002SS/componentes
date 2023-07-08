import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonModal, IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
  HeaderComponent
  ],
  exports: [
  HeaderComponent
  ],
  imports: [
  CommonModule,
  IonicModule
  ]
  })
  
export class ComponentsModule { }
