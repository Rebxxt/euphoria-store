import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputSearch]',
})
export class InputSearchDirective implements OnInit {

  @HostBinding()
  public borderRadius = '4px'

  @HostBinding()
  public border = 'none'

  @HostBinding()
  public backgroundColor = '#F6F6F6'

  @HostBinding()
  public padding = '12px 24px'

  @HostBinding()
  public fontSize = '18px'

  @HostBinding()
  public placeholder = 'Search'


  constructor() {}

  public ngOnInit() {
  }

}
