import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { InitialContentComponent } from './pages/initial-content/initial-content.component';
import { ContentComponent } from './pages/content/content.component';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent],
})
export class AppModule {}
