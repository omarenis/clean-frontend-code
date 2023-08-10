import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-autisme',
  templateUrl: './about-us-autisme.component.html',
  styleUrls: ['./about-us-autisme.component.css']
})
export class AboutUsAutismeComponent {
  @ViewChild('div1Element') div1Element!: ElementRef;
  @ViewChild('div2Element') div2Element!: ElementRef;
  @ViewChild('div3Element') div3Element!: ElementRef;
  @ViewChild('div4Element') div4Element!: ElementRef;
  @ViewChild('div5Element') div5Element!: ElementRef;
  @ViewChild('div6Element') div6Element!: ElementRef;
  @ViewChild('div7Element') div7Element!: ElementRef;

  scrollToDiv(divId: string) {
    let targetElement: HTMLElement | null = null;

    switch (divId) {
      case 'div1':
        targetElement = this.div1Element.nativeElement;
        break;
      case 'div2':
        targetElement = this.div2Element.nativeElement;
        break;
      case 'div3':
        targetElement = this.div3Element.nativeElement;
        break;
        case 'div4':
          targetElement = this.div4Element.nativeElement;
          break;
          case 'div5':
            targetElement = this.div5Element.nativeElement;
            break;
            case 'div6':
              targetElement = this.div6Element.nativeElement;
              break;
              case 'div7':
                targetElement = this.div7Element.nativeElement;
                break;
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
