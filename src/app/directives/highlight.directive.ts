import { Directive, ElementRef } from '@angular/core';

// Directive decorator
@Directive({
  // Selector name to use in templates
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Defining ElementRef inside constructor parameters
  constructor(el: ElementRef<HTMLElement>) {
    // Taket that element and add background color to it.
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
