import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton';


import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { FilterListPipe } from './pipes/filter-list.pipe';



@NgModule({
  declarations: [
    ImageLoaderComponent,
    FilterListPipe
  ],
    exports: [
        ImageLoaderComponent,
        FilterListPipe
    ],
  imports: [
    CommonModule,
    SkeletonModule,
  ]
})
export class SharedModule { }
