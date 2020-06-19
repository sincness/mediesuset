import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorScene]'
})
export class ColorSceneDirective {

  constructor(element: ElementRef) {
    const checkExist = setInterval(_ => {
      if (element.nativeElement.dataset.stage) {
         clearInterval(checkExist);
         check();
      }

   }, 100); // check every 100ms

    const check = () => {
      if (element.nativeElement.dataset.stage) {
        switch (element.nativeElement.dataset.stage) {
          case 'Rød scene':
            element.nativeElement.style.backgroundColor = '#ac324c';
            break;
          case 'Blå scene':
            element.nativeElement.style.backgroundColor = '#336699';
            break;
          case 'Grøn scene':
                element.nativeElement.style.backgroundColor = '#638b3f';
            break;
          case 'Lilla scene':
            element.nativeElement.style.backgroundColor = '#88267f';
            break;
        }

      }
    

  }


  }

}
