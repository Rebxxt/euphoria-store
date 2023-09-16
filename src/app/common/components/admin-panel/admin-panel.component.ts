import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  public isOpen: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public onOpen() {
    this.isOpen = true;
    this.renderer.setStyle(document.documentElement, 'overflowY', 'hidden')
  }

  public onClose() {
    this.isOpen = false;
    this.renderer.setStyle(document.documentElement, 'overflowY', 'auto')
  }
}
