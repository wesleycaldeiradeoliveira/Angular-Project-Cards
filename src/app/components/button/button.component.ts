import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

@Input({ required: true, alias: 'text'}) buttonText: string = ''; 

@Input({ required: true, alias: 'style'}) buttonStyle: 'white' | 'purple' = 'white';

@Output('clicked') buttonClikedEmitt = new  EventEmitter<void>();

onbuttonclicked(){
  this.buttonClikedEmitt.emit();
}
}
