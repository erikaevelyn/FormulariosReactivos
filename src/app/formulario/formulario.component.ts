import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  registroForm = new FormGroup({
    primerNombre: new FormControl('', [Validators.minLength(5), Validators.required]),
    segundoNombre: new FormControl('')
  })

  onSubmit(formulario: FormGroup) {
    const datos = formulario;
    console.log(datos);
  }

  ngOnInit() {
  }

}
