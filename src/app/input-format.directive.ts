import { Directive,HostListener,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

    constructor(private el: ElementRef) { }
    @Input('appInputformat') format;
  @HostListener('focus') 
onFocus(){console.log("onfocus");
let value:string=this.el.nativeElement.value;
if(this.format=='lowercase')
this.el.nativeElement.value=value.toLowerCase();
else
this.el.nativeElement.value=value.toUpperCase();}}
