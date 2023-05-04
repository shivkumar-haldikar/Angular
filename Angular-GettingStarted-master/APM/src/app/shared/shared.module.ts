import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ReplacePipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    ReplacePipe,
  ]
})
export class SharedModule { }
