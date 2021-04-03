import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {SectionNotFoundComponent} from './routes/section-not-found/section-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideItemOptionComponent} from './components/side-item-option/side-item-option.component';
import {LangPickerComponent} from './components/lang-picker/lang-picker.component';
import {SectionLoaderComponent} from './components/section-loader/section-loader.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SectionNotFoundComponent,
    SideItemOptionComponent,
    LangPickerComponent,
    SectionLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatOptionModule,
    MatSelectModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
