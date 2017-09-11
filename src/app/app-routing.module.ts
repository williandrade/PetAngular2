import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '',  redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent, data: { stateName: 'home', header: 1 }},
{path: 'company', component: CompanyComponent, data: { stateName: 'company', header: 2 }},
{path: 'result', component: SearchResultComponent, children: [], data: { stateName: 'result', header: 2 }},
{path: 'signin', component: SigninComponent, data: { stateName: 'signin', header: 2 }},
{path: 'signup', component: SignupComponent, data: { stateName: 'signup', header: 2 }}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
