import{Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core'

@Directive({
    selector:'[triple-click]'
})

export class TripleClickDirective{

    @Output('triple-click') OnThreeClick:EventEmitter<void> = new EventEmitter<void>();
    counter=  0;
    constructor(private e:ElementRef){
        // e.nativeElement.style.background = 'yellow';
    }
    @HostListener('click')
    ChangeColor(){
       this.counter++;
       if(this.counter==3){
           this.OnThreeClick.emit();
       } 
    }
    
}