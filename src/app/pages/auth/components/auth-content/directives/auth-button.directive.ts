import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appAuthButton]'
})
export class AuthButtonDirective {

  @Input()
  public set btnMode(mode: 'fill' | 'default') {
    if (mode === 'fill') {
      this.backgroundColor = '#8A33FD';
      this.border = 'none'
      this.color = 'white'
    }
  };

  @HostBinding('style.display')
  public display: string = 'block';

  @HostBinding('style.background-color')
  public backgroundColor: string = 'white';

  @HostBinding('style.border')
  public border: string = '1px solid #3C4242';

  @HostBinding('style.border-radius')
  public borderRadius: string = '8px';

  @HostBinding('style.width')
  public width: string = '100%';

  @HostBinding('style.padding')
  public padding: string = '16px';

  @HostBinding('style.color')
  public color: string = '#8A33FD';

  @HostBinding('style.text-transform')
  public textTransform: string = 'capitalize';

  @HostBinding('style.font-family')
  public fontFamily: string = '"Causten", sans-serif';

  @HostBinding('style.font-weight')
  public fontWeight: string = '500';

  @HostBinding('style.font-size')
  public fontSize: string = '22px';

  constructor() { }

}
