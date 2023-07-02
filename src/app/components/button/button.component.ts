import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() text: string; // input decorator is used to pass data (property binding) from parent to child component. 
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }

}
