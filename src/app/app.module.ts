import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { CrearquizScreenComponent } from './screens/crearquiz-screen/crearquiz-screen.component';
import { ContestarquizScreenComponent } from './screens/contestarquiz-screen/contestarquiz-screen.component';
import { ResultadosScreenComponent } from './screens/resultados-screen/resultados-screen.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';

//para las máscaras
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

//Este import es para los servicios HTTP
import { HttpClientModule } from '@angular/common/http';

//Para el modal
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input';


// materiales
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RightSidebarComponent } from './partials/right-sidebar/right-sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearquizModalComponent } from './modals/crearquiz-modal/crearquiz-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HomeScreenComponent,
    RegistroScreenComponent,
    CrearquizScreenComponent,
    ContestarquizScreenComponent,
    ResultadosScreenComponent,
    NavbarComponent,
    FooterComponent,
    RightSidebarComponent,
    CrearquizModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    NgxMaskDirective,
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
