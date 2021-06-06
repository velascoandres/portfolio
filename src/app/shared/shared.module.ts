import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton';


import {ImageLoaderComponent} from './image-loader/image-loader.component';
import {FilterListPipe} from './pipes/filter-list.pipe';
import {SideAvatarComponent} from './side-avatar/side-avatar.component';


@NgModule({
  declarations: [
    ImageLoaderComponent,
    FilterListPipe,
    SideAvatarComponent,
  ],
  exports: [
    ImageLoaderComponent,
    FilterListPipe,
    SideAvatarComponent,
  ],
  imports: [
    CommonModule,
    SkeletonModule,
  ]
})
export class SharedModule {
}
