import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../partials/navbar/navbar.component";
import { RightSidebarComponent } from "../../partials/right-sidebar/right-sidebar.component";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

}
