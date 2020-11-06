import{Directive, ElementRef, HostListener, Input} from '@angular/core'

@Directive({
    selector:'[mouse-over-color]'
})

export class MouseDirective{

    @Input('mouse-over-color') color:string;
    constructor(private e:ElementRef){
        // e.nativeElement.style.background = 'yellow';
    }
    @HostListener('mouseover')
    ChangeColor(){
        this.e.nativeElement.style.background = this.color;
    }
    @HostListener('mouseleave')
    ResetColor(){
        this.e.nativeElement.style.background=  'white';
    }
}