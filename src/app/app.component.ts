import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'symphony-front';
  produto: any;

  salvar($event: any) {
    console.log($event)
    this.produto = $event;
  }
}
