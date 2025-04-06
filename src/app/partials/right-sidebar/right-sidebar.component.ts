import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  @Output() cerrar = new EventEmitter();
  public isLogin: boolean = true;
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  public cerrar_drawer(){
    this.cerrar.emit();
  }

  public iniciarSesion(){

  }

  public goInicio(){
    this.router.navigate(["home"]);
  }

  public goCrearQuizz(){
    this.router.navigate(["crear-quiz"]);
  }

  public logout(){
    this.router.navigate(["/"]);
  }
}