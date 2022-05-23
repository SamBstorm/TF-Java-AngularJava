import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { DemoComEnfantComponent } from './components/demo-communication/demo-com-enfant/demo-com-enfant.component';
import { DemoCommunicationComponent } from './components/demo-communication/demo-communication.component';
import { DemoDirectCompoComponent } from './components/demo-direct-compo/demo-direct-compo.component';
import { DemoDirectCustomComponent } from './components/demo-direct-custom/demo-direct-custom.component';
import { DemoDirectStructComponent } from './components/demo-direct-struct/demo-direct-struct.component';
import { DemoFormulaireComponent } from './components/demo-formulaire/demo-formulaire.component';
import { DemoFormulaire2Component } from './components/demo-formulaire2/demo-formulaire2.component';
import { DemoGuardComponent } from './components/demo-guard/demo-guard.component';
import { DemoHomeComponent } from './components/demo-home/demo-home.component';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { DemoDetailsComponent } from './components/demo-routing/demo-details/demo-details.component';
import { DemoRoutingComponent } from './components/demo-routing/demo-routing.component';
import { DemoServicesComponent } from './components/demo-services/demo-services.component';
import { DemoStoragesComponent } from './components/demo-storages/demo-storages.component';
import { IntervalComponent } from './components/interval/interval.component';
import { IsAdminGuard } from './guards/is-admin.guard';
import { TestResolver } from './resolvers/test.resolver';

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
  {path:'formulaire', component : DemoFormulaireComponent},
  {path:'formulaire2', component : DemoFormulaire2Component},
  {path:'routing', component : DemoRoutingComponent},
  {path:'storages', component : DemoStoragesComponent},
  // ajout d'un paramètre de route
  {path:'details/:id', component : DemoDetailsComponent, resolve: { val: TestResolver }},
  { path: 'private', component: DemoGuardComponent, canActivate: [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
