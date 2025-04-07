import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-crearquiz-modal',
  templateUrl: './crearquiz-modal.component.html',
  styleUrls: ['./crearquiz-modal.component.scss']
})
export class CrearquizModalComponent implements OnInit{
  public dificultades:any[]= [
    {value: '1', nombre: 'Facil'},
    {value: '2', nombre: 'Medio'},
    {value: '3', nombre: 'Dificil'},
    ];

    public dificultadSeleccionada: string = "";
    public temaInteres: string = "";

  constructor(
    private dialogRef: MatDialogRef<CrearquizModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
  ){}

  ngOnInit(): void {

  }

  public cerrar_modal(){
    this.dialogRef.close({create: false});
  }

  public crearQuiz(){
    alert("aquí irá la silicitud http para crear el quiz");
    this.dialogRef.close({create:true});
  }

  public soloLetras(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    // Permitir solo letras (mayúsculas y minúsculas) y espacio
    if (
      !(charCode >= 65 && charCode <= 90) &&  // Letras mayúsculas
      !(charCode >= 97 && charCode <= 122) && // Letras minúsculas
      charCode !== 32                         // Espacio
    ) {
      event.preventDefault();
    }
  }
}
