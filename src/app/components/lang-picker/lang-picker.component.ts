import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-lang-picker',
  templateUrl: './lang-picker.component.html',
  styleUrls: ['./lang-picker.component.scss']
})
export class LangPickerComponent implements OnInit {

  selectedCode: string;
  constructor(
    private readonly translateService: TranslocoService,
  ) {
  }

  ngOnInit(): void {
    this.selectedCode = this.translateService.getActiveLang();
    this.translateService.langChanges$.subscribe(
      value => this.selectedCode = value,
    );
  }

  changeLanguage(lang: string): void {
    this.translateService.setActiveLang(lang);
  }

}
