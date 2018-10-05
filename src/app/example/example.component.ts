import { Component } from '@angular/core';
import { HttpService } from '../core/services/http/http.service';

import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-example',
  template: `
    <p><button type="button" (click)="runExample()">{{title}}</button></p>
    <p><button type="button" (click)="showDialog()">Show dialog</button></p>
    <div kendoDialogContainer></div>`,
})
export class ExampleComponent {

  public result;
  title = 'Error Handling - Open Kendo Dialog using service';

  constructor(private httpService: HttpService, private dialogService: DialogService) {

  }

  showDialog() {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }

      this.result = JSON.stringify(result);
    });
  }

  runExample() {


    console.clear();

    this.httpService
      .get('https://jsonplaceholder.typicode.com/1')
      // .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(
        (result) => {
          console.log('result', result);
        }
      );
  }
}
