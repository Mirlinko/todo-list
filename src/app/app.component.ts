import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  items = [
    { id: "id1", value: "first item", checked: false },
    { id: "id2", value: "second item", checked: false },
    { id: "id3", value: "third item", checked: false },
    { id: "id4", value: "LALALA item", checked: false },
    { id: "id5", value: "LOLOLO item", checked: false },
    { id: "id6", value: "LELELE item", checked: false },
  ];
}
