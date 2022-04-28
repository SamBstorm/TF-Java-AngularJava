import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoCommunicationComponent } from './components/demo-communication/demo-communication.component';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoFormulaireComponent } from './components/demo-formulaire/demo-formulaire.component';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { DemoServicesComponent } from './components/demo-services/demo-services.component';
import { IntervalComponent } from './components/interval/interval.component';

const routes: Routes = [
  {path:'', component:DemoHomeComponent},
  {path:'binding', component:DemoBindingComponent},
  {path:'pipe', component:DemoPipesComponent},
  {path:'interval', component:IntervalComponent},
  {path:'directCompo', component:DemoDirectCompoComponent},
  {path:'directStruct', component:DemoDirectStructComponent},
  {path:'directCustom', component:DemoDirectCustomComponent},
  {path:'communication', component: DemoCommunicationComponent},
  {path:'login', component : DemoServicesComponent},
  {path:'formulaire', component : DemoFormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
