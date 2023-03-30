import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentComponent } from './department/department.component';
import { LibraryComponent } from './library/library.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HTitleComponent } from './shared/htitle/htitle.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PdfComponent } from './pdf/pdf.component';
import { ButtonComponent } from './button/button.component';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { ComputerScienceComponent } from './shared/computer-science/computer-science.component';
import { TamilComponent } from './shared/tamil/tamil.component';
import { EnglishComponent } from './shared/english/english.component';
import { MathsComponent } from './shared/maths/maths.component';
import { ManagementComponent } from './shared/management/management.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    LibraryComponent,
    ContactComponent,
    MenuComponent,
    MenuComponent,
    HTitleComponent,
    FooterComponent,
    PdfComponent,
    ButtonComponent,
    ComputerScienceComponent,
    TamilComponent,
    EnglishComponent,
    MathsComponent,
    ManagementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    PdfJsViewerModule ,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
