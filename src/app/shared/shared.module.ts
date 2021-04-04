import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton';


import { ImageLoaderComponent } from './image-loader/image-loader.component';



@NgModule({
  declarations: [
    ImageLoaderComponent
  ],
  exports: [
    ImageLoaderComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule,
  ]
})
export class SharedModule { }
