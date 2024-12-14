import { Component } from '@angular/core';
import { DadoComponent } from "../dado/dado.component";

@Component({
  selector: 'app-tirardados',
  imports: [DadoComponent],
  templateUrl: './tirardados.component.html',
  styleUrl: './tirardados.component.css'
})
export class TirardadosComponent {
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  resultado: string = "Tira los dados para jugar";
  cont: number = 0;

  tirarDados() {
    this.n1 = Math.floor(Math.random() * 6) + 1;
    this.n2 = Math.floor(Math.random() * 6) + 1;
    this.n3 = Math.floor(Math.random() * 6) + 1;
    if (this.n1 == this.n2 && this.n1 == this.n3) {
      this.resultado = "¡Ganaste!" + " " + "Intentos: " + this.cont;
      this.cont=0;
    } else {
      this.resultado = "Perdiste, vuelve a intentarlo" + " " + "Intentos: " + this.cont;
      this.cont += 1;
    }
  }
}
