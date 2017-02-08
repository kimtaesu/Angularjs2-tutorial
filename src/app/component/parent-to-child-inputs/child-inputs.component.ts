import {Component} from "@angular/core";

@Component({
  selector: 'child-inputs',
  template: `<div>자식<br><br>
        inputs 프로퍼티로 받은 값 : {{name1}}, {{name2}}</div>`,
  styles: [`div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}`],
  inputs: ['name1', 'name2'] // ******** @Input 이 아닌 inputs으로 전달받음.
})

export class ChildInputsComponent {
  name1: string;
  name2: string;
}
