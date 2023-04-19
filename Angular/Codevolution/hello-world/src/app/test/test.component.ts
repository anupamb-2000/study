import { Component } from '@angular/core';

@Component({
  selector: "['app-test','.app-test','[app-test]',]",
  // templateUrl: './test.component.html',          // point to html file
  // template: '<div>Inline Template</div>',        // single html line
  template: ` <div>                                 
                Inline Template
              </div>`,
  // styleUrls: ['./test.component.css'],
  styles: [`
    div {
      color: red;
    }
  `]               // `` can be used to specify multiple inline styles as well
})
export class TestComponent {

}
