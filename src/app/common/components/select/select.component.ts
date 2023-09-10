import {Component, Input, OnInit} from '@angular/core';

export interface SelectItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  public list: Array<SelectItem> = [
    {
      key: 'English (united States)',
      value: 'eng'
    }
  ]

  public selectedItem: SelectItem = this.list[0];

  constructor() { }

  ngOnInit(): void {
  }

}
