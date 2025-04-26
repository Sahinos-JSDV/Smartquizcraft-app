import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearquizModalComponent } from 'src/app/modals/crearquiz-modal/crearquiz-modal.component';
import { ChatserviceService } from 'src/app/services/chatservice.service';

@Component({
  selector: 'app-crearquiz-screen',
  templateUrl: './crearquiz-screen.component.html',
  styleUrls: ['./crearquiz-screen.component.scss']
})
export class CrearquizScreenComponent implements OnInit {
  promptText = 'Escribe un poema sobre la inteligencia artificial';
  response: any;



  constructor(
    public dialog: MatDialog,
    private router: Router,
    private http: HttpClient,
    private Chatservice: ChatserviceService
  ) { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  public crear() {
    const dialogRef = this.dialog.open(CrearquizModalComponent, {
      data: {}, //Se pasan valores a través del componente
      height: '500px',
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.create && result.tema) {
        console.log('Tema recibido del modal:', result.tema);
        this.Chatservice.generatePrompt(this.promptText).subscribe((data) => {
          this.response = data;
        });
        console.log('respuestas recibidas:', this.response);

      } else {
        alert("Quiz no creado");
      }
    });
  }
}
