import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { TabsComponent } from 'src/app/component/tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    HeaderComponent,
    TabsComponent
  ]
})
export class SharedModule { }
