import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var $:any;


@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {
  public usuario: any = {};
  public errors:any = {};
  //Variables para funcionalidades en las contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  public token: String = "";

  constructor(
    private usuarioService: UsuarioService,
    private facadeService: FacadeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
    this.usuario = this.usuarioService.esquemaUser();
    this.token = this.facadeService.getSessionToken();
  }

  public showPassword(){
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
   }

  public showPwdConfirmar(){
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuarioService.validarUsuario(this.usuario);
    if(!$.isEmptyObject(this.errors)){
      alert("Los campos no están bien rellenados, por favor, verifica tus datos.")
      return false;
    }

    if(this.usuario.password == this.usuario.confirmar_password){
      this.usuarioService.registrarUsuario(this.usuario).subscribe(
        (response)=>{
          alert("Usuario registrado con éxito");
          if(this.token != ""){
            this.router.navigate(["home"]);
          }else{
            this.router.navigate(["/"]);
          }
        },
        (error)=>{

        }
      );
    }else{
      alert("Tus contraseñas no coinciden, por favor vuelve a insertarlas.");
      this.usuario.password = "";
      this.usuario.confirmar_password = "";
    }

  }

  public cancelar(){
    this.router.navigate(["/"]);
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
