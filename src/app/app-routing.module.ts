import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { CrearquizScreenComponent } from './screens/crearquiz-screen/crearquiz-screen.component';
import { ContestarquizScreenComponent } from './screens/contestarquiz-screen/contestarquiz-screen.component';
import { ResultadosScreenComponent } from './screens/resultados-screen/resultados-screen.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent, pathMatch: 'full'},
  {path: 'registro-usuario', component: RegistroScreenComponent, pathMatch: 'full'},
  {path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'crear-quiz', component: CrearquizScreenComponent, pathMatch: 'full'},
  {path: 'contestar-quiz', component: ContestarquizScreenComponent, pathMatch: 'full'},
  {path: 'resultados-quiz', component: ResultadosScreenComponent, pathMatch: 'full'},
  //{path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
