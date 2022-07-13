import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxteditorComponent } from "./txteditor/txteditor.component";

const routes: Routes = [
  {path: "", redirectTo: "txteditor", pathMatch: "full"},
  {path: "txteditor", component: TxteditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
