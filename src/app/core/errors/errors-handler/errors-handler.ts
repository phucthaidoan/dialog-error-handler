
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { DialogService } from '@progress/kendo-angular-dialog';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    const dialogService = this.injector.get(DialogService);
    dialogService.open({
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
  }
}

