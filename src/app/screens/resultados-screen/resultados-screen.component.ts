import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados-screen',
  templateUrl: './resultados-screen.component.html',
  styleUrls: ['./resultados-screen.component.scss']
})
export class ResultadosScreenComponent implements OnInit {
  public datosRecibidos: any = 0 ;
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['datos']) {
        const datos = JSON.parse(decodeURIComponent(params['datos']));
        console.log(datos);
        this.datosRecibidos = datos;
        console.log(this.datosRecibidos);
      } else {
        console.error('No se encontraron datos en los query params');
      }
    });
  }

  public regresarHome(){
    this.router.navigate(['/home']);
  }

}
