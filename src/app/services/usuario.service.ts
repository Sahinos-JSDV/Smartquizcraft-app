import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public validatorService: ValidatorService,
    public errorService: ErrorsService
  ) { }

  public esquemaUser(){
    return {
      'rol': 'usuario',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'telefono': '',
      'ciudad': '',
      'edad': '',
    }
  }
}
