import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Output() drawer = new EventEmitter();
    constructor( private router: Router ) { }
    ngOnInit(): void {
        // Aquí puedes agregar lógica adicional si es necesario
    }
    drawerOpen(){
      this.drawer.emit();
    }
    redirect(){
      this.router.navigate(["home"]);
    }
}
