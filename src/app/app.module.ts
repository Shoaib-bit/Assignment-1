import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
          path : '',
          pathMatch : 'full',
          redirectTo : 'users',
      },
      {
          path : 'users',
          loadChildren : () => 
              import ('./users/users.module').then((mod) => mod.UsersModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
