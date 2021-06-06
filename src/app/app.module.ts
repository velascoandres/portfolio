import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

import {NgParticlesModule} from 'ng-particles';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';

import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {SharedModule} from './shared/shared.module';
import {SectionNotFoundComponent} from './routes/section-not-found/section-not-found.component';
import {SideItemOptionComponent} from './components/side-item-option/side-item-option.component';
import {LangPickerComponent} from './components/lang-picker/lang-picker.component';
import {SectionLoaderComponent} from './components/section-loader/section-loader.component';


@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        SectionNotFoundComponent,
        SideItemOptionComponent,
        LangPickerComponent,
        SectionLoaderComponent,
        NavBarComponent,
        MainComponent,
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
        ProgressBarModule,
        SharedModule,
        NgParticlesModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
