import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  buscar() {
    this.onEnter.emit(this.termino);
  }
  constructor() {}

  ngOnInit(): void {}
}
