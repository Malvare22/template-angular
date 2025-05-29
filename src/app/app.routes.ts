import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { InitialContentComponent } from './pages/initial-content/initial-content.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: '', component: InitialContentComponent },
      { path: 'last', component: ContentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
