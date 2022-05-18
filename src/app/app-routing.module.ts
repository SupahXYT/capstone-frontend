import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicySearchComponent } from './policy-search/policy-search.component';
import { BrokerRegistryComponent } from './broker-registry/broker-registry.component';
import { RequestsManagerComponent } from './requests-manager/requests-manager.component';
import { BrokersComponent } from './brokers/brokers.component';

const APP_routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'policy-search', component: PolicySearchComponent },
  { path: 'broker-registry', component: BrokerRegistryComponent },
  { path: 'brokers', component: BrokersComponent },
  { path: 'requests-manager', component: RequestsManagerComponent }
];

const PORTAL_routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent }
]

export const isPortal: boolean =
  (window.location.hostname === 'www.gpc.org');

@NgModule({
  imports: [
    RouterModule.forRoot(
      isPortal ? PORTAL_routes : APP_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

