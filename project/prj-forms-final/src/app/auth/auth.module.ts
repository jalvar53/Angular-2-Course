import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';

@NgModule({
  declarations: [
    SignupComponent,
    SiginComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
