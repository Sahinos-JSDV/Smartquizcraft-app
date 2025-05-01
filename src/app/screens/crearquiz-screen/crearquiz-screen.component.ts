import { state } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearquizModalComponent } from 'src/app/modals/crearquiz-modal/crearquiz-modal.component';

@Component({
  selector: 'app-crearquiz-screen',
  templateUrl: './crearquiz-screen.component.html',
  styleUrls: ['./crearquiz-screen.component.scss']
})
export class CrearquizScreenComponent implements OnInit {



  constructor(
    public dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public crear() {
    const dialogRef = this.dialog.open(CrearquizModalComponent, {
      data: {}, //Se pasan valores a través del componente
      height: '500px',
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result?.create && result.tema) {
        console.log('Tema recibido del modal:', result.tema);
         const url = 'https://magicloops.dev/api/loop/4362fea7-5ad5-44ce-9788-cb7a1b8f132d/run';
         const body = { tema: result.tema };
 
         try {
           const response = await this.http.post(url, body).toPromise();
           const jsonString = encodeURIComponent(JSON.stringify(response));

           this.router.navigate(["contestar-quiz"], { queryParams: { datos: jsonString } });
           
         } catch (error) {
           console.error('Error al llamar a la API:', error);
           alert('Ocurrió un error al generar el quiz.');
         }
        
      } else {
        alert("Quiz no creado");
      }
    });
  }
}
