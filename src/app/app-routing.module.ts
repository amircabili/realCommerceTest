import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {path: 'gallery', component: GalleryComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
