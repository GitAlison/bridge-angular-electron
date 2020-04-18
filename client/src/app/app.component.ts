import { Component } from '@angular/core';
import { logar } from './electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';



  logarData(){
    logar('parametro passado para o brid');
  }
}
