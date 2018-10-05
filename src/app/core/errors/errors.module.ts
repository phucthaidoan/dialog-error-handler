import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsHandler } from './errors-handler/errors-handler';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ]
})
export class ErrorsModule { }
