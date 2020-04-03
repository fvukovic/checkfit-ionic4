import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

 
  constructor(translate: TranslateService, private activatedRoute: ActivatedRoute) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  
  }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
