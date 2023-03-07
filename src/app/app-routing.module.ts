import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PdfComponent } from './pdf/pdf.component';
import { ComputerScienceComponent } from './shared/computer-science/computer-science.component';
import { TamilComponent } from './shared/tamil/tamil.component';
import { EnglishComponent } from './shared/english/english.component';
import { MathsComponent } from './shared/maths/maths.component';
import { ManagementComponent } from './shared/management/management.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'about',component:AboutComponent},
  {path:'Department',component:DepartmentComponent},
  {path:'library',component:LibraryComponent},
  {path:'contact',component:ContactComponent},
  {path:'pdf',component:PdfComponent},
  {path:'computer-science',component:ComputerScienceComponent},
  {path:'tamil',component:TamilComponent},
  {path:'English',component:EnglishComponent},
  {path:'maths',component:MathsComponent},
  {path:'Management',component:ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
