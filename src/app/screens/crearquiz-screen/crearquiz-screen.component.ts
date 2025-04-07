import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearquizModalComponent } from 'src/app/modals/crearquiz-modal/crearquiz-modal.component';

@Component({
  selector: 'app-crearquiz-screen',
  templateUrl: './crearquiz-screen.component.html',
  styleUrls: ['./crearquiz-screen.component.scss']
})
export class CrearquizScreenComponent implements OnInit{
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  public crear(){
    const dialogRef = this.dialog.open(CrearquizModalComponent,{
      data: {id: 1}, //Se pasan valores a través del componente
      height: '500px',
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.create){
        console.log("Quiz creado");
        this.router.navigate(["contestar-quiz"]);
      }else{
        alert("Quiz no creado");
      }
    });
  }
}
