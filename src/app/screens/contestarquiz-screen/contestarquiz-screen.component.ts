import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contestarquiz-screen',
  templateUrl: './contestarquiz-screen.component.html',
  styleUrls: ['./contestarquiz-screen.component.scss']
})
export class ContestarquizScreenComponent implements OnInit {
  public datosRecibidos: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  if (navigation?.extras?.state) {
    this.datosRecibidos = navigation.extras.state['datos'];
    console.log('Datos recibidos:', this.datosRecibidos);
  } else {
    console.log('No se recibieron datos en la navegación.');
  }
   }

  ngOnInit(): void {
    
  }

}
