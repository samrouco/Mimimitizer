import { Component } from '@angular/core';
import { Stream } from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mimimitizer';
  word: string;
  mimimitizedWord: string;

  mimimitize() {
    if (this.checkSpecialInputs()) {
      this.mimimitizedWord = '';

      const words = this.word.split(' ');
      words.forEach(str => {
        let i = 0;

        str.split('').forEach(ch => {
          if (i++ % 2 === 0) {
            this.mimimitizedWord += this.isUpperCase(ch) ? 'M' : 'm';
          } else {
            this.mimimitizedWord += this.isUpperCase(ch) ? 'I' : 'i';
          }
        });

        this.mimimitizedWord += ' ';
      });
    }

  }

  isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
  }

  checkSpecialInputs(): boolean {
    switch (this.word.toLowerCase()) {
      case 'samuel te quiero':
        this.mimimitizedWord = 'Yo tambien te quiero, eres increible, desconocido';
        return false;
      case 'que tonto eres':
        // tslint:disable-next-line: max-line-length
        this.mimimitizedWord = 'No te calientes, porque tu estas usando esta mierda, tampoco es que seas la persona mas inteligente no? Replanteate la vida.';
        return false;
      default:
        return true;
    }
  }
}
