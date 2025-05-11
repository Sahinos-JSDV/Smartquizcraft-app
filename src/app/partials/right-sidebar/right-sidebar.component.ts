import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  @Output() cerrar = new EventEmitter();
  public isLogin: boolean = true;

  constructor( private router: Router,
    private facadeService: FacadeService
  ) { }

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
    this.facadeService.logout().subscribe(
      (response)=>{
        console.log("Entró");

        this.facadeService.destroyUser();
        //Navega al login
        this.router.navigate(["/"]);
      }, (error)=>{
        console.error(error);
      }
    );
  }
}
