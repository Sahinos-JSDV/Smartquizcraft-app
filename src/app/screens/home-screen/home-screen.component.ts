import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  public usuario: String = "Usuario";

  constructor(
    private router: Router,
    private facadeService: FacadeService,
  ) { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
    this.usuario = this.facadeService.getUserCompleteName();
  }

  GoQuizz(){
    this.router.navigate(["crear-quiz"]);
  }

}
