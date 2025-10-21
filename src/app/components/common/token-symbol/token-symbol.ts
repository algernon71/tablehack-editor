import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token-symbol',
  imports: [],
  templateUrl: './token-symbol.html',
  styleUrl: './token-symbol.scss'
})
export class TokenSymbol {
  @Input()
  type?: string;

  @Input()
  value?: string;

  @Input()
  size: string = "SMALL";
  url() { 
    return '/public/images/symbols/' + this.filename();
  }

  filename() {
    switch (this.type) {
      case "INITIATIVE":
        return "initiative_symbol.svg";
      case "ENCOUNTER":
        return "warning_sign.svg";
      case "EVENT":
        return "defence_physical.svg";
      case "ACTION":
        return "actions.svg";


      default:
        return "questionmark.svg";


    }
  }
}
