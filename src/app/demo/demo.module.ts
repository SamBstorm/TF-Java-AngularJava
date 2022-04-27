import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { AveragePipe } from './pipes/average.pipe';
import { SharedModule } from '../shared/shared.module';
import { IntervalComponent } from './components/interval/interval.component';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { HighlineDirective } from './directives/highline.directive';
import { AddLineDirective } from './directives/add-line.directive';
import { DemoCommunicationComponent } from './components/demo-communication/demo-communication.component';
import { DemoComEnfantComponent } from './components/demo-communication/demo-com-enfant/demo-com-enfant.component';


@NgModule({
  declarations: [
    DemoHomeComponent,
    DemoBindingComponent,
    DemoPipesComponent,
    AveragePipe,
    IntervalComponent,
    DemoDirectCompoComponent,
    DemoDirectStructComponent,
    DemoDirectCustomComponent,
    HighlineDirective,
    AddLineDirective,
    DemoCommunicationComponent,
    DemoComEnfantComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
