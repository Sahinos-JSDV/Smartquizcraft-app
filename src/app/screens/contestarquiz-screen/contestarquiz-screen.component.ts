import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-contestarquiz-screen',
  templateUrl: './contestarquiz-screen.component.html',
  styleUrls: ['./contestarquiz-screen.component.scss']
})
export class ContestarquizScreenComponent implements OnInit {
  public datosRecibidos: any;

  respuestas: number[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['datos']) {
        const datos = JSON.parse(decodeURIComponent(params['datos']));
        console.log(datos);
        this.datosRecibidos = datos.preguntas; // Extrae el array dentro del objeto
        console.log(this.datosRecibidos);
      } else {
        console.error('No se encontraron datos en los query params');
      }
    });
  }

  verificarRespuestas() {
    let correctas = 0;
    this.datosRecibidos.forEach((pregunta, index) => {
      if (this.respuestas[index] === pregunta.numeroCorrecto) {
        correctas++;
      }
    });

    alert(`Has acertado ${correctas} de ${this.datosRecibidos.length} preguntas.`);
  }

}
