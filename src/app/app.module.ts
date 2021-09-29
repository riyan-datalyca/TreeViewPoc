import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { 
  DxButtonModule,
  DxFileManagerModule,
  DxPopupModule,
  DxTreeMapModule,
  DxTreeViewModule,
 } from 'devextreme-angular';
import { HomeComponent } from './home/home.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { CustomFileManagerComponent } from './custom-file-manager/custom-file-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    HomeComponent,
    FileManagerComponent,
    CustomFileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    // DxTreeMapModule,
    DxTreeViewModule,
    DxFileManagerModule,
    DxPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
