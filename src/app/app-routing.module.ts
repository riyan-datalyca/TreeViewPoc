import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HomeComponent } from './home/home.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { CustomFileManagerComponent } from './custom-file-manager/custom-file-manager.component';
const routes: Routes = [
  { path: 'tree-view', component:TreeViewComponent},
  { path:'home', component:HomeComponent},
  { path: 'file-manager', component:FileManagerComponent},
  { path: 'custom-file-manager', component:CustomFileManagerComponent},

  { path:'', redirectTo:'/tree-view', pathMatch:'full'},
  { path:'**', redirectTo:'/tree-view', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
