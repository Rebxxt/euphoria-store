import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragButton]'
})
export class DragButtonDirective {

  private _meta?: MouseEvent
  private _transform = { y: parseInt(localStorage.getItem('adminPanel') ?? '150') }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(eve: MouseEvent) {
    this._meta = eve
  }

  @HostListener('document:mouseup', ['$event'])
  public onMouseUp() {
    this._meta = undefined
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(eve: MouseEvent) {
    if (this._meta) {
      const maxHeight = window.innerHeight - this.elementRef.nativeElement.clientHeight;
      let newY: number = eve.clientY - this._meta.offsetY
      if (eve.clientY - this._meta.offsetY > maxHeight) {
        newY = maxHeight
      } else if (eve.clientY < this._meta.offsetY) {
        newY = 0;
      }
      this._transform = { y: newY }
    }
  }

  @HostBinding('style.transform') get transform() {
    localStorage.setItem('adminPanel', this._transform.y.toString())
    return `translate(0, ${this._transform.y}px)`;
  }

  constructor(private elementRef: ElementRef) { }

}
