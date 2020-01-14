import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  id: string;
  nombre: string;
  apellido: string;
  ciudad: string;
  alumno1: Alumno;

  constructor() {
    this.id = '10';
    this.nombre = ' Juan';
    this.apellido = 'Gutierres';
    this.ciudad = 'Lima';
    this.alumno1 = new Alumno (1, 'Joe', 'Valdivia', 'Arequipa');
}

  ngOnInit() {
  }

}
