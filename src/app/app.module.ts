import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.1, threshold: 1 }
  }
}

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path : "login",
        loadChildren : 'app/components/login-signup/login-signup.module#LoginSignUpModule'
      },
      {
        path : "profile",
        loadChildren : 'app/components/profile/profile.module#ProfileModule'
      }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }] // use our custom hammerjs config
})

export class AppModule { }