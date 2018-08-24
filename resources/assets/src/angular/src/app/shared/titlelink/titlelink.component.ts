import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-titlelink',
  templateUrl: './titlelink.component.html',
  styleUrls: ['./titlelink.component.css']
})
export class TitlelinkComponent {
  @Input() TitleText: string;
  constructor() { }
}
