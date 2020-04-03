import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
 import { TranslateService } from '@ngx-translate/core';
  import {TranslateModule} from '@ngx-translate/core';


import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {    
  constructor(translate: TranslateService) {
  // this language will be used as a fallback when a translation isn't found in the current language
  translate.setDefaultLang('en');
 
}}
